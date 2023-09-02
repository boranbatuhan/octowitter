import { createRouter, createWebHistory} from "vue-router";    
 const routes=[ {                                                  
         path:'/',                                                 
         name:'Home',                                              
         component: ()=> import ("/src/router/views/HomePage.vue")       
     }]                                                            
 const router =createRouter({                                      
     history:createWebHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 