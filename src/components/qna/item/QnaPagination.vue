<template>
  <div class="container h-100 d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0);" @click="goToPage(1)"
          >&#60;&#60;</a
        >
      </li>
      <li class="page-item" v-if="currPageNum > 1">
        <a
          class="page-link"
          href="javascript:void(0);"
          @click="goToPage(currPageNum - 1)"
          >&#60;</a
        >
      </li>
      <li
        v-for="(item, index) in totalPageNum"
        :key="index"
        :class="{ 'page-item': 1, active: currPageNum === index + 1 }"
      >
        <a
          class="page-link"
          href="javascript:void(0);"
          @click="goToPage(index + 1)"
          >{{ index + 1 }}</a
        >
      </li>
      <li class="page-item" v-if="currPageNum < totalPageNum">
        <a
          class="page-link"
          href="javascript:void(0);"
          @click="goToPage(currPageNum + 1)"
          >&#62;</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="javascript:void(0);"
          @click="goToPage(totalPageNum)"
          >&#62;&#62;</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QnaPagination",
  props: {
    currPageNum: Number,
    totalPageNum: Number,
  },
  methods: {
    goToPage(pageNum) {
      this.$emit("setPageNum", pageNum);
    },
  },
};
</script>

<style></style>
