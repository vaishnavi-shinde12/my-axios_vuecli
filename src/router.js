import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(Router);

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
