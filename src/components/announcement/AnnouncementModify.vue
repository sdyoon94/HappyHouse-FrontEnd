<template>
  <div>
    <announcement-input-item type="modify"></announcement-input-item>
  </div>
</template>

<script>
import http from "@/api/http";
import AnnouncementInputItem from "@/components/announcement/item/AnnouncementInputItem.vue";
export default {
  name: "AnnouncementList",
  components: { AnnouncementInputItem },
  data() {
    return {
      announcementLists: [],
      // announcementLists: [
      //   {
      //     announcementIndex: 1,
      //     userId: "ssafy_admin",
      //     announcementRegtime: "2022-02-02 13:22:22",
      //     announcementTitle: "test Q&A",
      //     announcementContent: "test content 입니다.",
      //     public: true,
      //   },
      // ],
      // announcementCommentLists: [
      //   {
      //     commentIndex: 1,
      //     commentContent: "commentContent",
      //     commentRegtime: "2022-02-02 13:22:22",
      //     announcementIndex: 1,
      //   },
      // ],
      announcementCommentLists: [],
      loginedUser: "admin",
    };
  },
  created() {
    // console.log(this.$route.params.announcementIndex),
    http
      .get(`/announcement/${this.$route.params.announcementIndex}`)
      .then(({ data }) => {
        this.announcementLists = data;
      });
    http
      .get(`/announcement/comment/${this.$route.params.announcementIndex}`)
      .then(({ data }) => {
        this.announcementCommentLists = data;
      });
  },
  methods: {
    checkLogined() {
      if (this.loginedUser === "admin") {
        return true;
      } else {
        return false;
      }
    },
    announcementList() {
      this.$router.push({ name: "announcementList" });
    },
    announcementCommentList() {
      if (this.announcementCommentLists) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
