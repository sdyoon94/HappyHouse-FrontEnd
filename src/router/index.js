import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import QnaView from "@/views/QnaView";
import AnnouncementView from "@/views/AnnouncementView.vue";
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";
import UserInfo from "@/views/UserInfoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/announcement",
    name: "announcement",
    component: AnnouncementView,
    redirect: "/announcement/list",
    children: [
      {
        path: "list",
        name: "announcementList",
        component: () =>
          import("@/components/announcement/AnnouncementList.vue"),
      },
      {
        path: "write",
        name: "announcementRegist",
        component: () =>
          import("@/components/announcement/AnnouncementRegist.vue"),
      },
      {
        path: "detail/:announcementNo",
        name: "announcementDetail",
        component: () =>
          import("@/components/announcement/AnnouncementDetail.vue"),
      },
      {
        path: "modify/:announcementNo",
        name: "announcementModify",
        component: () =>
          import("@/components/announcement/AnnouncementModify.vue"),
      },
    ],
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsView"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView"),
  },
  {
    path: "/qna",
    name: "qna",
    component: QnaView,
    redirect: "/qna/list", //redirect 때문에 header에서 색 변하는거 안먹힘, vuex로 store에서 true,false 변경하는 함수 써야할듯
    children: [
      {
        path: "list",
        name: "qnaList",
        component: () => import("@/components/qna/QnaList.vue"),
      },
      {
        path: "write",
        name: "qnaRegist",
        component: () => import("@/components/qna/QnaRegist.vue"),
      },
      {
        path: "detail/:QnAIndex",
        name: "qnaDetail",
        component: () => import("@/components/qna/QnaDetail.vue"),
      },
      {
        path: "modify/:QnAIndex",
        name: "qnaModify",
        component: () => import("@/components/qna/QnaModify.vue"),
      },
      {
        path: "/findpw",
        name: "userfindpw",
        component: () => import("@/components/user/UserFindPw.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/userinfo",
    name: "info",
    component: UserInfo,
  },
  {
    path: "/usermodify/:userid",
    name: "usermodify",
    component: () => import("@/components/user/UserModify.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
