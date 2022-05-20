<template>
  <div class="container align-items-center">
    <div class="row">
      <ul class="list-group list-group-horizontal list-group-flush">
        <li class="list-group-item">ID</li>
        <li class="list-group-item">{{ logined.userId }}</li>
      </ul>
    </div>
    <div class="row">
      <ul class="list-group list-group-horizontal list-group-flush">
        <li class="list-group-item">Name</li>
        <li class="list-group-item">{{ logined.username }}</li>
      </ul>
    </div>
    <div class="row">
      <ul class="list-group list-group-horizontal list-group-flush">
        <li class="list-group-item">Email</li>
        <li class="list-group-item">{{ logined.email }}</li>
      </ul>
    </div>
    <div class="row">
      <ul class="list-group list-group-horizontal list-group-flush">
        <li class="list-group-item">가입일자</li>
        <li class="list-group-item">{{ logined.joindate }}</li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary" @click="moveModify">
      수정하기
    </button>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {};
  },
  methods: {
    moveModify() {
      this.$router.push({
        name: "usermodify",
        params: { userid: this.$store.state.logined.userId },
      });
    },
  },
  computed: {
    logined() {
      return this.$store.state.logined;
    },
  },
};
</script>
<style scoped>
.container {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
}
div {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 30px;
}
</style>
