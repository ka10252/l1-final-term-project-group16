import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import SignUp from '@/components/Signup.vue';
import Logout from "@/components/Logout.vue";
import About from "@/views/About.vue";
import Homepage from "@/views/Homepage.vue";
import ProfileView from "@/views/ProfileView.vue";
import UpdateProfile from "@/views/UpdateProfile.vue";
import PostPage from "@/views/PostPage.vue";
import PostDetailView from "@/views/PostDetailView.vue";
import UpdatePreference from "@/views/UpdatePreference.vue";
import SavedList from "@/views/SavedList.vue";
import Communities from "@/views/Communities.vue";

const routes = [
  {
    path: "/", // The root path should only be declared once.
    name: "Login",
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/update-profile", 
    name: "UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostDetailView,
    props: true,
  },
  {
    path: "/update-preference",
    name: "UpdatePreference",
    component: UpdatePreference,
  },
  {
    path: "/postpage",
    name: "postpage",
    component: PostPage,
  },
  {
    path: "/saved-list", 
    name: "SavedList",
    component: SavedList,
  },
  {
    path: "/communities",
    name: "communities",
    component: Communities,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
