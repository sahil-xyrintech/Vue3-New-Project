import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import axios from 'axios'
import { VueAxios } from 'vue-axios'
import store from './index.js';
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "./style/input.css";
import FriendContact from "./Components/FriendContact.vue";
import NewFriend from "./Components/NewFriend.vue";
import InputText from "./Components/InputText.vue";
import NavBar from "./Components/NavBar.vue";
import MainBody from "./Components/MainBody.vue";
import MainTable from "./Components/MainTable.vue";
import OverlayPanel from "./Components/OverlayPanel.vue";
const app = createApp(App);
app.component("FriendContact", FriendContact);
app.component("NewFriend", NewFriend);
app.component("InputText", InputText);
app.component("NavBar", NavBar);
app.component("MainBody", MainBody);
app.component("MainTable", MainTable);
app.component("OverlayPanel", OverlayPanel);
app.use(PrimeVue);
app.use(VueAxios, axios)
app.use(store)
app.mount("#app");
