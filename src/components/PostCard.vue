<template>
    <div class="containerContent no-scrollbar">
            <!-- content area start -->
            <div class="content">
                <!-- ppimg start -->
                <div class="imgPp">
                    <img draggable="false" loading="lazy" class="w-full h-full object-cover" src="https://img.asmedia.epimg.net/resizer/LwJL_cCgCTOPeePgB0mbu4IZX5A=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IUJZOLTM5ZOPTOFKTTBGT64FZ4.jpg" alt="pp_img">
                </div>
                <!-- ppimg end -->

                <!-- post area start -->
                <div class="contentArea " v-auto-animate>
                <!-- date start -->
                <p class="time">{{ formatDate }}</p>
                <!-- date end -->

                <!-- show post area start -->
                <div v-if="!toggleEdit" class="post">
                    <strong class="id">{{ props.post.uid }}</strong>
                    <p class="inline break-words">{{ props.post.content }}</p>
                </div>
                <!-- show post area end -->
                    
                    
                <!-- edit post start -->
                <div class=" w-full shrink-0" v-if="toggleEdit">
                    <strong class="id">{{ props.post.uid }}</strong>
                    <!-- edit text input start -->
                    <textarea 
                    maxlength="180" 
                    class="textarea " 
                    @keydown.enter.prevent 
                    name="content" 
                    id="content" 
                    placeholder="Your text here" 
                    autocomplete="off" 
                    spellcheck="false"
                    v-model="contentTemp">
                    </textarea>
                <!-- edit text input end -->

                <!-- buttons nav start-->
                <div class="buttonsEditContainer">
                        <!-- attach button start -->
                        <div class="buttonSvg">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.91V16a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v9.182a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V8"></path>
                            </svg>
                        </div>
                        <!-- attach button end -->

                        <!-- emote button start -->
                        <div class="buttonSvg">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                            <path d="M8 9.05v-.1"></path>
                            <path d="M16 9.05v-.1"></path>
                            <path d="M16 14c-.5 1.5-1.79 3-4 3s-3.5-1.5-4-3"></path>
                            </svg>
                        </div>
                        <!-- emote button end -->

                        <!-- submit button start -->
                        <button @click="postEdit" class="text-zinc-400 hover:text-zinc-600 transition-all cursor-pointer ml-auto">CANCEL</button>
                        <!-- submit button end -->

                        <!-- submit button start -->
                        <button @click="postEditAccept" class="buttonUpdate">UPDATE</button>
                        <!-- submit button end -->
                    </div>
                        <!-- buttons nav end-->
                </div>
                <!-- edit post end -->
            </div>
                <!-- post area end -->
                
            </div>
            <!-- content area end -->


        <!-- buttons nav start-->
        <div class="buttonsContainer">
            <!-- emoteLike button start -->
            <div @click="postLike" class="buttonSvg" :class="{'!text-fuchsia-700' : props.post.isLike}">
                <svg class="self-start" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.605 5.782.23-2.369c.091-.952.98-1.598 1.878-1.366 1.351.35 2.3 1.605 2.3 3.044v3.035c0 .675 0 1.013.146 1.26.083.141.197.26.333.345.24.151.567.151 1.22.151h.396c1.703 0 2.554 0 3.078.39.393.293.67.722.78 1.208.146.65-.181 1.463-.836 3.087l-.326.81a3.261 3.261 0 0 0-.226 1.48c.232 2.874-2.047 5.295-4.833 5.136l-10.424-.599c-1.139-.065-1.708-.098-2.222-.553-.515-.455-.612-.924-.805-1.861a14.324 14.324 0 0 1 .055-6.037c.283-1.248 1.475-1.92 2.706-1.76 3.264.42 6.223-2.019 6.55-5.4z"></path>
                <path d="m7 11.5-.137.457A14.983 14.983 0 0 0 7 21"></path>
                </svg>
                <p class="select-none">{{ props.post.like }}</p>
            </div>
            <!-- emoteLike button end -->

            <!-- emoteDislike button start -->
            <div @click="postDislike" class="buttonSvg" :class="{'!text-blue-700' : props.post.isDislike}">
                <svg class="self-start mt-1" width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12.395 18.218-.23 2.369c-.091.952-.98 1.598-1.878 1.366-1.351-.35-2.3-1.605-2.3-3.044v-3.035c0-.675 0-1.013-.146-1.26a1.018 1.018 0 0 0-.333-.345c-.24-.151-.567-.151-1.22-.151h-.396c-1.703 0-2.554 0-3.078-.39a2.073 2.073 0 0 1-.78-1.208c-.146-.65.181-1.463.836-3.087l.327-.81c.188-.468.265-.975.225-1.48-.232-2.874 2.047-5.295 4.833-5.135l10.424.598c1.139.065 1.708.098 2.222.553.515.455.612.924.805 1.861a14.317 14.317 0 0 1-.055 6.037c-.283 1.248-1.475 1.92-2.706 1.76-3.264-.42-6.223 2.019-6.55 5.4z"></path>
                <path d="m17 12.5.137-.457c.887-2.956.84-6.115-.137-9.043"></path>
                </svg>
                <p class="select-none">{{ props.post.dislike }}</p>
            </div>
            <!-- emoteDislike button end -->

            <!-- edit button start -->
            <div @click="postEdit" class="buttonSvg ml-auto !text-zinc-400 cursor-pointer">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m16.474 5.408 2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621z"></path>
                <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"></path>
                </svg>
            </div>
            <!-- edit button end -->

            <!-- delete button start -->
            <div @click="postDelete" class="buttonSvg !text-zinc-400 cursor-pointer">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <path d="M14 11v6"></path>
                <path d="M10 11v6"></path>
                </svg>
            </div>
            <!-- delete button end -->

        </div>
        <!-- buttons nav end-->

    </div>
</template>

<script setup>
import { computed, ref } from "vue";

import store from "/src/store"

const props = defineProps({
    post:Object
})

const toggleEdit = ref(false)
const contentTemp=ref(props.post.content)

//post like
const postLike = ()=>{
    store.dispatch("postLikeAction",props.post.postid)
}
//post dislike
const postDislike = ()=>{
    store.dispatch("postDislikeAction",props.post.postid)

}
//post edit
const postEdit = ()=>{
    toggleEdit.value= !toggleEdit.value
    if(toggleEdit.value==true){
        contentTemp.value=props.post.content
    }
}
const postEditAccept =()=>{
    if(toggleEdit.value){
        const upVal = {
            postid:props.post.postid,
            content:contentTemp.value,
            date:Date.now()
        }
        store.dispatch("updatePostAction",upVal)
        toggleEdit.value=false
        localStorage.setItem('store', JSON.stringify(store.getters.getPosts))

    }
}

//post delete
const postDelete = ()=>{
    store.dispatch("deletePostAction",props.post)
    localStorage.setItem('store', JSON.stringify(store.getters.getPosts))
}


// format date 
const formatDate = computed(()=>{
    const date = new Date(props.post.date)
    return date.toLocaleString("tr-TR", {  day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })
})

</script>

<style scoped>
.containerContent{
    @apply
    w-[26rem] 
    bg-white
    rounded-md border border-violet-400
    drop-shadow-lg
    shrink-0
    h-fit
}


.buttonsContainer{
    @apply
    flex items-center justify-start
    gap-2
    border-y border-violet-100
    w-full h-8
     px-6 mt-auto
     shrink-0
}

.buttonSvg{
    @apply
    hover:text-violet-700 hover:fill-violet-700 text-zinc-400 fill-zinc-400 transition-all
    flex items-center justify-center
    gap-1
}
.buttonSubmit{
    @apply
    uppercase text-white tracking-wider
    px-5 py-1.5
    ml-auto
    rounded-lg
    transition-all
    bg-violet-600 hover:bg-violet-700
    shadow-md shadow-transparent hover:shadow-violet-700/50
    active:bg-violet-500
}
.content{
    @apply
    flex items-start justify-start
    h-full w-full
    mt-3
    box-border
}
.imgPp{
    @apply
    bg-blue-500
    w-12 h-12 rounded-full
    ml-4 my-1 mr-1
    shrink-0 overflow-hidden 
    border border-violet-400
    box-border
}
.contentArea{
    @apply
    flex items-start justify-start flex-col
    px-2
    w-full
    transition-all
}

.time{
    @apply
    text-xs text-zinc-400
}
.post{
    @apply
    text-black
    max-w-[20rem] 

}
.id{
    @apply
    text-violet-600
    cursor-pointer select-none
    before:content-["@"]
    mr-2 inline
}


.textarea{
    @apply
    outline-none 
    w-full h-24 
    break-words 
    resize-none 
    px-1.5 py-1
    transition-all duration-500
    placeholder:text-zinc-200 hover:placeholder:text-zinc-400
}

.buttonsEditContainer{
    @apply
    flex items-center justify-start
    gap-2
    w-full
    text-xs
}


.buttonUpdate{
    @apply
    uppercase text-white tracking-wider 
    px-5 py-1.5

    rounded-lg
    transition-all
    bg-violet-600 hover:bg-violet-700
    shadow-md shadow-transparent hover:shadow-violet-700/50
    active:bg-violet-500
}
</style>