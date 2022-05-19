<template>
  <div>
    <h1>전국 아파트 신문</h1>
    <button type="button" class="btn btn-info float-right" @click="moveNews()">
      더보기
    </button>
    <br /><br /><br />

    <table class="table table-hover">
      <tbody>
        <news-list-item
          v-for="article in articleLists"
          :key="article.imgUrl"
          v-bind="article"
        ></news-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/api/http";
import NewsListItem from "@/components/news/item/NewsListItem.vue";

export default {
  name: "NewsList",
  components: { NewsListItem },
  data() {
    return {
      articleLists: [],
    };
  },
  created() {
    http.get(`/news/list`).then(({ data }) => {
      this.articleLists = data;
    });
  },
  methods: {
    moveNews() {
      window.open("http://www.jkapt.com/sub.html?section=sc2", "_blank");
    },
  },
};
</script>

<style></style>
