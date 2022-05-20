<template>
  <!-- <div class="register">회원가입 페이지</div> -->
  <user-regist></user-regist>
</template>

<script>
import UserRegist from "../components/user/UserRegist.vue";
export default {
  name: "RegisterView",
  components: { UserRegist },
};
</script>
