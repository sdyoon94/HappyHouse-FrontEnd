<template>
  <div class="left_side">
    <div class="left_content">
      <img src="@/assets/김희성.jpg" alt="이미지가 없습니다." /><br /><br />
      <span>김희성</span><br /><br />
    </div>
    <div class="right_content" style="padding-left: 100px">
      <table class="table table-bordered">
        <tbody>
          <tr style="width: 300px">
            <td>이메일</td>
            <td>khsung0@nate.com</td>
          </tr>
          <tr>
            <td>깃허브</td>
            <td>
              <a href="https://github.com/khsung0" target="_blank"
                >https://github.com/khsung0</a
              >
            </td>
          </tr>
          <tr>
            <td>포트폴리오</td>
            <td>
              <a href="https://khsung0.wixsite.com/portfolio" target="_blank"
                >https://khsung0.wixsite.com/portfolio</a
              >
            </td>
          </tr>
          <tr>
            <td>블로그</td>
            <td>
              <a href="https://khsung0.tistory.com" target="_blank"
                >https://khsung0.tistory.com</a
              >
            </td>
          </tr>
        </tbody>
      </table>
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

.left_content {
  float: left;
}
.right_content {
  padding-top: 50px;
  float: left;
}
.right_content > div {
  padding-top: 25px;
}
div {
  font-size: 22px;
}
</style>
