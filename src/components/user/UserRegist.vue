<template>
  <div>
    <h1>회원가입</h1>
    <br />
    <form action="" @submit="onSubmit" class="was-validated col-*-12">
      <div class="form-group">
        <label for="userId">ID :</label>&nbsp;
        <input
          type="text"
          id="userId"
          placeholder="Enter ID"
          name="userId"
          v-model="userId"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label for="userPwd">Password :</label>&nbsp;
        <input
          type="password"
          id="userPwd"
          placeholder="Enter password"
          name="userPwd"
          v-model="userPwd"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">8자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label for="username">Name :</label>&nbsp;
        <input
          type="text"
          id="username"
          placeholder="Enter password"
          name="username"
          v-model="username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail :</label>&nbsp;
        <input
          type="text"
          id="email"
          placeholder="Enter password"
          name="email"
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
        .then((data) => {
          console.log(data);
          console.log(data.config.data);
        })
        .catch(() => {
          console.log("오류 발생");
        });
    },
  },
};
</script>

<style></style>
