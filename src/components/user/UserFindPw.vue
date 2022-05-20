<template>
  <div>
    <h1>비밀번호 찾기</h1>
    <br />
    <form action="" @submit="onSubmit" class="col-*-12">
      <div class="form-group">
        <label>ID :</label>&nbsp;
        <input
          id="userId"
          placeholder="Enter ID"
          v-model="user.userId"
          required
          @keyup="idCheck"
        />
        <div class="valid">적합합니다.</div>
        <div class="invalid">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label for="email">E-mail :</label>&nbsp;
        <input
          type="text"
          placeholder="Enter email"
          v-model="user.email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">비밀번호 찾기</button>
    </form>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "UserFindPw",
  data() {
    return {
      user: {
        userId: "",
        email: "",
      },
    };
  },
  methods: {
    idCheck() {
      var valid = document.querySelector("#userId ~ .valid");
      var invalid = document.querySelector("#userId ~ .invalid");
      if (this.user.userId.length == 0) {
        valid.style.display = "none";
        invalid.style.display = "none";
        return false;
      } else if (
        this.user.userId.length >= 6 &&
        this.user.userId.length <= 12
      ) {
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
      http
        .post("/user/checkuser", {
          userId: this.user.userId,
          email: this.user.email,
        })
        .then((data) => {
          if (data.data == 1) {
            if (confirm("임시 비밀번호를 이메일로 보내겠습니까??")) {
              http
                .post("/user/setpw", {
                  userId: this.user.userId,
                  email: this.user.email,
                })
                .then((data) => {
                  data;
                  alert("임시 비밀번호를 발송하였습니다.");
                  this.$router.push("/login");
                })
                .catch(() => {
                  console.log("오류 발생");
                });
            }
          } else {
            alert("사용자 정보가 잘못 되었습니다.");
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
