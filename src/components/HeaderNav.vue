<template>
  <nav>
    <router-link to="/"
      ><img src="@/assets/happyhouse.png" alt="이미지가 없습니다." title="home"
    /></router-link>
    <div class="logined" v-show="isLogined">{{ loginedId }}님 환영합니다</div>
    <br />
    <router-link to="/">Home</router-link> &nbsp;|&nbsp;
    <router-link to="/notice">Notice</router-link> &nbsp;|&nbsp;
    <router-link to="/news">News</router-link> &nbsp;|&nbsp;
    <router-link to="/contact">Contact</router-link> &nbsp;|&nbsp;
    <router-link to="/qna">Q&A</router-link> &nbsp;|&nbsp;
    <router-link to="/register">회원가입</router-link> &nbsp;|&nbsp;
    <router-link to="/login">로그인</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLogined: false,
      loginedId: "admin",
    };
  },
};
</script>

<style>
.logined {
  float: right;
}
</style>
