<template>
  <div>
    <h1>회원가입</h1>
    <br />
    <form action="" @submit="onSubmit" class="col-*-12">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input
          id="userId"
          placeholder="Enter ID"
          v-model="userId"
          required
          @keyup="idCheck"
        />
        <div class="valid">적합합니다.</div>
        <div class="invalid">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label>Password :</label>&nbsp;
        <input
          id="userPwd"
          type="password"
          placeholder="Enter password"
          v-model="userPwd"
          required
          @keyup="pwdCheck"
        />
        <div class="valid">적합합니다.</div>
        <div class="invalid">8자 미만 혹은 12자 초과입니다.</div>
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
    idCheck() {
      var valid = document.querySelector("#userId ~ .valid");
      var invalid = document.querySelector("#userId ~ .invalid");
      if (this.userId.length == 0) {
        valid.style.display = "none";
        invalid.style.display = "none";
        return false;
      } else if (this.userId.length >= 6 && this.userId.length <= 12) {
        valid.style.display = "block";
        invalid.style.display = "none";
        return true;
      } else {
        valid.style.display = "none";
        invalid.style.display = "block";
        return false;
      }
    },
    pwdCheck() {
      var valid = document.querySelector("#userPwd ~ .valid");
      var invalid = document.querySelector("#userPwd ~ .invalid");
      if (this.userPwd.length == 0) {
        valid.style.display = "none";
        invalid.style.display = "none";
        return false;
      } else if (this.userPwd.length >= 8 && this.userPwd.length <= 12) {
        valid.style.display = "block";
        invalid.style.display = "none";
        return true;
      } else {
        valid.style.display = "none";
        invalid.style.display = "block";
        return false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      if (!this.idCheck()) {
        document.getElementById("userId").focus();
      } else if (!this.pwdCheck()) {
        document.getElementById("userPwd").focus();
      } else {
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
      }
    },
  },
};
</script>

<style>
.valid {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}
.invalid {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
</style>
