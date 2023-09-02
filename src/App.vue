<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import store from "/src/store"

onMounted(()=>{
  // get posts from local
  var getstorage = localStorage.getItem("store")
  if (getstorage){
    store.dispatch("setPostsAction", JSON.parse(getstorage))
  }
})
</script>
