import { createApp } from "vue";
import App from "./App.vue";
import { createRouter,createWebHistory } from "vue-router";
import ProductList from "../src/components/productList.vue";
import UserList from "./components/userList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/users", component: UserList },
    { path: "/products", component: ProductList },
  ],
});

const app=createApp(App)
app.use(router);
app.mount("#app");
