import Home from './views/Home.vue';
import About from './views/About.vue';
import NewPost from './views/NewPost.vue';
import userRegist from './components/user_auth/UserRegistrComponent.vue';
export default{
    mode: 'history',
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/offers/new',
            name: 'newOffer',
            component: NewPost
        },
        {
            path: '/user/registration',
            name: 'userRegist',
            component: userRegist
        },
    ]
}