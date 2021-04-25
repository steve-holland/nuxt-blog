<template>
    <section class="post-list">
        <PostPreview id="1" title="Post 1"  previewText="Post 1 Preview Text" thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg" />
        <PostPreview id="2" title="Post 2"  previewText="Post 2 Preview Text" thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg" />
        <PostPreview id="3" title="Post 3"  previewText="Post 3 Preview Text" thumbnail="https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
