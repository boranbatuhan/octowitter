import { createStore } from "vuex";
const store = createStore({
    state:{
        posts:[]
    },
    getters:{
        getPosts(state){
            return state.posts
        }
    },
    mutations:{
        addPost(state,value){
            state.posts = [...state.posts, value];

        },
        deletePost(state,value){
            state.posts = state.posts.filter(i => i!=value)
        },
        updatePost(state,value){
            state.posts.map(i => {
                if( i.postid == value.postid){
                    i.date = value.date
                    i.content = value.content
                }
            })
        },
        postLike(state,value){
            state.posts.map(i => {
                if( i.postid == value){
                    if(!i.isLike){
                        i.like +=1
                        i.isLike = true
                    }
                    else if(i.isLike){
                        i.like -=1
                        i.isLike = false
                    }
                }
            })
        },
        postDislike(state,value){
            state.posts.map(i => {
                if( i.postid == value){
                    if(!i.isDislike){
                        i.dislike +=1
                        i.isDislike = true
                    }
                    else if(i.isDislike){
                        i.dislike -=1
                        i.isDislike = false
                    }
                }
            })
        },
        setPosts(state,value){
            state.posts = value
        },
    },
    actions:{
        addPostAction(context,valuePost){
            context.commit('addPost',valuePost)
        },
        deletePostAction(context,valueDelete){
            context.commit('deletePost',valueDelete)
        },
        updatePostAction(context,valueUpdate){
            context.commit('updatePost',valueUpdate)
        },
        postLikeAction(context,valueUpdate){
            context.commit('postLike',valueUpdate)
        },
        postDislikeAction(context,valueUpdate){
            context.commit('postDislike',valueUpdate)
        },
        setPostsAction(context,value){
            context.commit('setPosts',value)

        }
    }
})


export default store; 
