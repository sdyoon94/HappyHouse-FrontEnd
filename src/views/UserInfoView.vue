<template>
  <user-info></user-info>
</template>

<script>
import UserInfo from "@/components/user/UserInfo.vue";
export default {
  name: "UserInfoView",
  components: { UserInfo },
};
</script>

<style scoped>
.container {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
div {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 30px;
}
</style>
