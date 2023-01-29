import { createApp } from "vue";
import App from "./App.vue";
import "./style/input.css";
import FriendContact from "./Components/FriendContact.vue";
const app = createApp(App);
app.component("FriendContact", FriendContact);
app.mount("#app");
