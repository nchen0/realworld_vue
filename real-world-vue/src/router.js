import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList.vue";
import EventCreate from "./views/EventCreate.vue";
import EventShow from "./views/EventShow.vue";
import User from "./views/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "eventlist",
      component: EventList
    },
    {
      path: "/create",
      name: "eventcreate",
      component: EventCreate
    },
    {
      path: "/event/:id",
      name: "eventshow",
      component: EventShow,
      props: true
    },
    {
      path: "/user/:username",
      name: "user",
      component: User,
      props: true
    }
  ]
});
