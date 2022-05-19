<template>
  <div>
    <h1>로그인</h1>
    <br />
    <form action="" class="was-validated col-*-12">
      <div class="form-group">
        <label for="uname">ID :</label>&nbsp;
        <input
          type="text"
          id="uname"
          placeholder="Enter ID"
          name="uname"
          v-model="userId"
          required
        />
        <div class="valid-feedback">적합합니다.</div>
        <div class="invalid-feedback">6자 미만 혹은 12자 초과입니다.</div>
      </div>
      <div class="form-group">
        <label for="pwd">Password :</label>&nbsp;
        <input
          type="password"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          v-model="userPw"
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
export default {
  name: "UserLogin",
  components: {},
  data() {
    return {
      userId: "",
      userPw: "",
      correctId: false,
      correctPw: false,
    };
  },
  methods: {
    lengthCheck(type) {
      if (type === "id") {
        if (this.userId.length >= 6 && this.userId.length <= 12) return true;
        else return false;
      } else {
        if (this.userPw.length >= 8 && this.userPw.length <= 12) return true;
        else return false;
      }
    },
  },
};
</script>

<style></style>
