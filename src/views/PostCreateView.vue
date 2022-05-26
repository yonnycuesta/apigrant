<template>
  <div>
    <post-create-components></post-create-components>
    
  </div>
</template>


<script>
import PostCreateComponents from "@/components/PostCreateComponents.vue";

export default {
  name: "PostCreateView",
  components: {
    PostCreateComponents,
  },
};
</script>