import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-blog-1f759-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
                .then(res => { 
                    const postsArray = []
                    for(const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e))
            },
            addPost(vueContext, post) {
                const createdPost = {
                    ...post, 
                    updatedDate: new Date()
                }
                return axios.post("https://nuxt-blog-1f759-default-rtdb.europe-west1.firebasedatabase.app/posts.json", createdPost)
                .then(res => {
                    vueContext.commit('addPost', {...createdPost, id: res.data.name })
                })
                .catch(e => console.log(e));
            },
            editPost(vueContext, editedPost) {
                return axios.put('https://nuxt-blog-1f759-default-rtdb.europe-west1.firebasedatabase.app/posts/' + editedPost.id + '.json', editedPost)
                .then(result => {
                    vueContext.commit('editPost', editedPost)
                    
                })
                .catch(e => console.log(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore