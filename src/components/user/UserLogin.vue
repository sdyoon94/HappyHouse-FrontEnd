<template>
  <div>
    <h1>로그인</h1>
    <br />
    <form action="" @submit="onSubmit" class="was-validated">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input
          id="userId"
          type="text"
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
      <button type="submit" class="btn btn-success">확인</button>
    </form>
    <button class="btn btn-warning" @click="moveFindPw">비밀번호 찾기</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import http from "@/api/http";
export default {
  name: "UserLogin",
  components: {},
  data() {
    return {
      userId: "",
      userPwd: "",
    };
  },
  methods: {
    ...mapMutations(["setLogined"]),

    idCheck() {
      var valid = document.querySelector("#userId ~ .valid");
      var invalid = document.querySelector("#userId ~ .invalid");
      if (this.userId.length == 0) {
        valid.style.display = "none";
        invalid.style.display = "none";
      } else if (this.userId.length >= 6 && this.userId.length <= 12) {
        valid.style.display = "block";
        invalid.style.display = "none";
      } else {
        valid.style.display = "none";
        invalid.style.display = "block";
      }
    },
    pwdCheck() {
      var valid = document.querySelector("#userPwd ~ .valid");
      var invalid = document.querySelector("#userPwd ~ .invalid");
      if (this.userPwd.length == 0) {
        valid.style.display = "none";
        invalid.style.display = "none";
      } else if (this.userPwd.length >= 8 && this.userPwd.length <= 12) {
        valid.style.display = "block";
        invalid.style.display = "none";
      } else {
        valid.style.display = "none";
        invalid.style.display = "block";
      }
    },
    onSubmit(event) {
      event.preventDefault();
      http
        .post("/user/login", {
          userId: this.userId,
          userPwd: this.userPwd,
        })
        .then((data) => {
          if (typeof data.data === "string") {
            alert("ID 혹은 PW가 틀렸습니다.");
          } else {
            this.setLogined({
              userId: data.data.userId,
              username: data.data.userName,
              email: data.data.email,
              joindate: data.data.joinDate,
            });
            this.$router.push({ path: "/" });
            this.$router.go();
          }
        })
        .catch(() => {
          console.log("오류 발생");
        });
    },
    moveFindPw() {
      this.$router.push({ path: "/findpw" });
    },
  },
};
</script>

<style scoped>
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
button {
  margin-top: 30px;
}
</style>
