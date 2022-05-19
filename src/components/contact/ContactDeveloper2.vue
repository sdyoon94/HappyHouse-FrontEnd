<template>
  <div class="left_side">
    <div class="left_content">
      <img src="@/assets/윤성도.png" alt="이미지가 없습니다." /><br /><br />
      <span>윤성도</span><br /><br />
    </div>
    <div class="right_content" style="padding-left: 100px">
      <table class="table table-bordered">
        <tbody>
          <tr style="width: 300px">
            <td>이메일</td>
            <td>sdyoon94@gmail.com</td>
          </tr>
          <tr>
            <td>깃허브</td>
            <td>
              <a href="https://github.com/sdyoon94" target="_blank"
                >https://github.com/sdyoon94</a
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
