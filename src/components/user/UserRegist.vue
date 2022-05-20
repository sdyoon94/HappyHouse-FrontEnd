<template>
  <div>
    <h1>회원가입</h1>
    <br />
    <form action="" @submit="onSubmit" class="was-validated col-*-12">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input id="userId" placeholder="Enter ID" v-model="userId" required />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label>Password :</label>&nbsp;
        <input
          type="password"
          placeholder="Enter password"
          v-model="userPwd"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">8자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label>Name :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter password"
          v-model="userName"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter password"
          v-model="email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">확인</button>
    </form>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "UserRegist",
  components: {},
  data() {
    return {
      userId: "",
      userPwd: "",
      userName: "",
      email: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      http
        .post("/user/register", {
          userId: this.userId,
          userPwd: this.userPwd,
          userName: this.userName,
          email: this.email,
        })
        .then(() => {
          this.$router.push("login");
        })
        .catch(() => {
          this.userId = "";
          document.getElementById("userId").focus();
          alert("이미 존재하는 ID입니다.");
        });
    },
  },
};
</script>

<style></style>
