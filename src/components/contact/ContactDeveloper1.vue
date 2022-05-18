<template>
  <div class="left_side">
    <div class="left_content">
      <img src="@/assets/김희성.jpg" alt="이미지가 없습니다." /><br /><br />
      <span>김희성</span>
    </div>
    <div class="right_content">
      <div>이메일 : khsung0@nate.com</div>
      <div>
        깃허브 주소 :
        <a href="https://github.com/khsung0" target="_blank"
          >https://github.com/khsung0</a
        >
      </div>
      <div>
        포트폴리오 주소 :
        <a href="https://khsung0.wixsite.com/portfolio" target="_blank"
          >https://khsung0.wixsite.com/portfolio</a
        >
      </div>

      <div>
        블로그 주소 :
        <a href="https://khsung0.tistory.com" target="_blank"
          >https://khsung0.tistory.com</a
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
.left_side {
  float: left;
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
