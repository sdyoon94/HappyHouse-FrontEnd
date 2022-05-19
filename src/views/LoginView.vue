<template>
  <!-- <div class="login">로그인 페이지</div> -->
  <user-login></user-login>
</template>

<script>
import UserLogin from "@/components/user/UserLogin.vue";
export default {
  name: "LoginView",
  components: { UserLogin },
};
</script>
