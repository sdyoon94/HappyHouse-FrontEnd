<template>
  <div id="app">
    <!-- <header-nav></header-nav> -->
    <div class="d-flex" id="wrapper">
      <!-- Sidebar-->
      <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light">Happy House</div>
        <div class="list-group list-group-flush">
          <router-link
            uter-link
            to="/"
            class="list-group-item list-group-item-action list-group-item-light p-3"
            >Home</router-link
          >
          <router-link
            to="/announcement"
            class="list-group-item list-group-item-action list-group-item-light p-3"
            >Announcement</router-link
          >
          <router-link
            to="/news"
            class="list-group-item list-group-item-action list-group-item-light p-3"
            >News</router-link
          >
          <router-link
            to="/contact"
            class="list-group-item list-group-item-action list-group-item-light p-3"
            >Contact</router-link
          >
          <router-link
            to="/qna"
            class="list-group-item list-group-item-action list-group-item-light p-3"
            >Q&A</router-link
          >
        </div>
      </div>
      <!-- Page content wrapper-->
      <div id="page-content-wrapper">
        <!-- Top navigation-->
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light border-bottom"
        >
          <div class="container-fluid">
            <button class="btn btn-primary" id="sidebarToggle">
              Toggle Menu
            </button>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <router-link uter-link to="/" class="nav-link"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item" v-if="!loginCheck">
                  <router-link to="/register" class="nav-link"
                    >회원가입</router-link
                  >
                </li>
                <li class="nav-item" v-if="!loginCheck">
                  <router-link to="/login" class="nav-link">로그인</router-link>
                </li>
                <li class="nav-item" v-if="loginCheck">
                  <router-link to="/userinfo" class="nav-link"
                    >회원정보</router-link
                  >
                </li>
                <li class="nav-item" v-if="loginCheck" @click="logout">
                  <router-link to="/" class="nav-link" replace
                    >로그아웃</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- Page content-->
        <div class="container-fluid" style="padding: 70px 40px">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {
      // loginCheck: true,
      loginCheck: this.$store.state.logined.userId === "" ? false : true,
    };
  },
  computed: {
    logined() {
      return this.$store.state.logined;
    },
  },
  methods: {
    ...mapMutations(["setLogout"]),
    logout() {
      this.setLogout();
      this.$router.go();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Jua&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Do Hyeon", sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
