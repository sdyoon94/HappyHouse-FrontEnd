<template>
  <div>
    <h1>로그인</h1>
    <br />
    <form action="" @submit="onSubmit" class="was-validated">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter ID"
          name="uname"
          v-model="userid"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label>Password :</label>&nbsp;
        <input
          type="password"
          placeholder="Enter password"
          v-model="userpwd"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">8자 미만 혹은 12자 초과입니다.</div>
      </div>
      <button type="submit" class="btn btn-primary">확인</button>
    </form>
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
      userid: "",
      userpwd: "",
    };
  },
  methods: {
    ...mapMutations(["setLogined"]),
    lengthCheck(type) {
      if (type === "id") {
        if (this.userId.length >= 6 && this.userId.length <= 12) return true;
        else return false;
      } else {
        if (this.userPw.length >= 8 && this.userPw.length <= 12) return true;
        else return false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      http
        .post("/user/login", {
          userId: this.userid,
          userPwd: this.userpwd,
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
            this.$router.go();
            this.$router.push("/");
          }
        })
        .catch(() => {
          console.log("오류 발생");
        });
    },
  },
};
</script>

<style></style>
