<template>
  <div class="right_side">
    <div class="left_content">
      <img src="@/assets/윤성도.png" alt="이미지가 없습니다." /><br /><br />
      <span>윤성도</span>
    </div>
    <div class="right_content">
      <div>이메일 : sdyoon94@gmail.com</div>
      <div>
        깃허브 주소 :
        <a href="https://github.com/sdyoon94" target="_blank"
          >https://github.com/sdyoon94</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 200px;
}
.right_side {
  float: right;
  width: 50%;
}
.left_content {
  float: left;
}
.right_content {
  padding-top: 50px;
}
.right_content > div {
  padding-top: 25px;
}
div {
  font-size: 22px;
}
</style>
