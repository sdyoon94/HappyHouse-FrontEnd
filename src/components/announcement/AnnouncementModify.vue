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
      loginedUser: "admin",
    };
  },
  created() {
    http
      .get(`/announcement/${this.$route.params.announcementIndex}`)
      .then(({ data }) => {
        this.announcementLists = data;
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
  },
};
</script>

<style></style>
