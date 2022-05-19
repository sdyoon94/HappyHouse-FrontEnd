<template>
  <div>
    <h3>공지사항</h3>
    <b-button
      variant="outline-primary"
      v-if="checkLogined"
      @click="moveWrite()"
      class="float-end btn"
      >글쓰기</b-button
    >
    <table v-if="announcementLists.length" class="table">
      <colgroup>
        <col class="col-1" />
        <col class="col-6" />
        <col class="col-2" />
        <col class="col-2" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성시각</th>
        </tr>
      </thead>
      <tbody>
        <announcement-list-item
          v-for="announcement in announcementLists"
          :key="announcement.announcementNo"
          v-bind="announcement"
        ></announcement-list-item>
      </tbody>
    </table>
    <h2 v-else>등록된 글이 없습니다.</h2>
  </div>
</template>

<script>
import http from "@/api/http";
import AnnouncementListItem from "@/components/announcement/item/AnnouncementListItem";
export default {
  name: "AnnouncementList",
  components: {
    AnnouncementListItem,
  },
  data() {
    return {
      announcementLists: [],
      loginedUser: "admin",
    };
  },
  created() {
    http.get(`/announcement`).then(({ data }) => {
      this.announcementLists = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "announcementRegist" });
    },
    checkLogined() {
      if (this.loginedUser === "admin") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
