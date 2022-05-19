<template>
  <div style="font-size: large">
    <div class="float-end" style="padding: 10px">
      <b-button @click="announcementList" variant="outline-primary"
        >목록</b-button
      >
      <b-button
        @click="announcementModify"
        v-if="checkLogined()"
        variant="outline-warning"
      >
        수정하기
      </b-button>
      <b-button
        @click="announcementDelete"
        v-if="checkLogined()"
        variant="outline-danger"
      >
        삭제하기
      </b-button>
    </div>
    <table class="table">
      <thead>
        <th class="col-9">제목</th>
        <th class="col-1">작성자</th>
        <th class="col-2">작성 시각</th>
      </thead>
      <tbody>
        <tr>
          <td>{{ announcementLists.subject }}</td>
          <td>{{ announcementLists.userid }}</td>
          <td>{{ announcementLists.regtime }}</td>
        </tr>
        <tr>
          <th colspan="3">내 용</th>
        </tr>
        <tr style="height: 30vh">
          <th colspan="3" class="text-left" style="padding: 30px">
            {{ announcementLists.content }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "announcementList",
  components: {},
  data() {
    return {
      announcementLists: [],
      loginedUser: "admin",
    };
  },
  created() {
    http
      .get(`/announcement/${this.$route.params.announcementNo}`)
      .then(({ data }) => {
        this.announcementLists = data;
        console.log(data);
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
    announcementModify() {
      this.$router.push({
        name: "announcementModify",
        params: { announcementIndex: this.$route.params.announcementNo },
      });
    },
    announcementDelete() {
      if (confirm("정말 삭제하시겠습니까??")) {
        http
          .delete(`/announcement/${this.$route.params.announcementNo}`)
          .then(({ data }) => {
            console.log(data);
            alert("삭제하였습니다.");
          });

        this.$router.push({ name: "announcementList" });
        this.$router.go();
      }
    },
    announcementCommentList() {
      if (this.announcementCommentLists.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.commentRegist();
    },
    commentRegist() {
      http
        .post(`/announcement/comment/${this.$route.params.announcementNo}`, {
          commentContent: this.comment,
          announcementNo: this.$route.params.announcementNo,
        })
        .then(({ data }) => {
          console.log(data);
          this.comment = "";
          let msg = "등록이 완료되었습니다.";
          alert(msg);
          http
            .get(`/announcement/comment/${this.$route.params.announcementNo}`)
            .then(({ data }) => {
              this.announcementCommentLists = data;
            })
            .catch(() => {
              let msg = "등록 중 오류가 발생하였습니다.";
              alert(msg);
            });

          // this.$router.push({
          //   name: "announcementDetail",
          //   params: { announcementNo: this.$route.params.announcementNo },
          // });
        });
    },
  },
};
</script>

<style></style>
