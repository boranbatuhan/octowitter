<template>

    <div class="max-h-screen overflow-hidden">
        <div class="containerMain">
            <!-- logo start -->
            <img draggable="false" loading="eager" class="logo" src="/src/assets/imgs/octowitter-logo.png" alt="logo">
            <!-- logo end -->

            <!-- create post start -->
            <CreatePostCard/>
            <!-- create post end -->
            
            <!-- postlist start -->
            <ul class="containerContent no-scrollbar" v-auto-animate>
                <li v-for="p in allPosts" :key="p.postid" class="w-full md:px-0 ">
                    <PostCard  :post="p"/>
                </li>
            </ul>
            <!-- postlist end -->
        </div>
    </div>
</template>

<script setup>
import {  computed } from "vue"
import CreatePostCard from "/src/components/CreatePostCard.vue"
import PostCard from "/src/components/PostCard.vue"
import store from "/src/store"

//date list
const allPosts = computed(()=>{
    const listTemp = store.getters.getPosts
    return listTemp.sort((a, b) => b.date - a.date);
})
</script>

<style scoped>
.containerMain{
    @apply
    container mx-auto 
    !font-roboto 
    py-10 px-2 
    flex flex-col items-center justify-start gap-2
    relative
}
.containerContent{

    @apply
    overflow-y-auto
    max-h-[50vh]
    flex items-start justify-start flex-col gap-2
    py-2 
    border-y border-violet-400
    md:w-[26rem] w-full 
}

.logo{
    @apply
    w-6 h-6 
    hover:w-12 hover:h-12
    absolute top-0 left-0 
    animate-pulse duration-1000
}
</style>