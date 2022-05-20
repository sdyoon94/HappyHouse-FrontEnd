<template>
  <div>
    <h1>회원 정보 수정</h1>
    <br />
    <form action="" @submit="onSubmit" class="was-validated">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter ID"
          v-model="user.userId"
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
          v-model="user.userPwd"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">8자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label>변경 Password :</label>&nbsp;
        <input
          type="password"
          placeholder="Enter new password"
          v-model="user.newUserPwd"
          required
        />
      </div>
      <div class="form-group">
        <label>변경 Password 확인 :</label>&nbsp;
        <input type="password" placeholder="Enter new password" required />
        <div class="valid-feedback">변경 Password가 일치 합니다.</div>
        <div class="invalid-feedback">변경 Password가 불일치 합니다.</div>
      </div>
      <div class="form-group">
        <label>Name :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter password"
          v-model="user.username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter password"
          v-model="user.email"
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
  name: "UserModify",
  components: {},
  data() {
    return {
      user: {
        userId: this.$store.state.logined.userId,
        userPwd: "",
        newUserPwd: "",
        username: this.$store.state.logined.username,
        email: this.$store.state.logined.email,
        joindate: this.$store.state.logined.joindate,
      },
    };
  },
  computed: {
    logined() {
      return this.$store.state.logined;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      http
        .get("/user/check", {
          userId: this.user.userId,
          userPwd: this.user.userPwd,
          userName: this.user.username,
          email: this.user.email,
        })
        .then((data) => {
          console.log(data);
          if (data) {
            http
              .post("/user/modify", {
                userId: this.user.userId,
                userPwd: this.user.newUserPwd,
                userName: this.user.username,
                email: this.user.email,
              })
              .then((data) => {
                data;
                alert("수정 완료하였습니다.");
                this.$router.push("/");
              })
              .catch(() => {
                console.log("오류 발생");
              });
          } else {
            alert("비밀번호를 잘못 입력 하였습니다.");
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
