// npm install vue-router@4
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '~/pages/Home';

export default createRouter({
    // hashMode : 특정 페이지에서 새로고침 했을 때, "페이지를 찾을 수 없음" 방지
    history:createWebHashHistory(),

    // pages : page를 구분하는 개념
    routes: [
        {
            path: "/",
            name: Home,
            component: Home,
        }
    ]
})