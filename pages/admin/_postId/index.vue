<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components:{
        AdminPostForm
    },
    data(){
        return {
            loadedPost: {
                author: 'Steve Holland',
                title: 'Test Post',
                thumbnailLink: 'https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg',
                content: 'This is a test Post.'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>