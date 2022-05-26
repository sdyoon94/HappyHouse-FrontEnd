<template>
  <!-- <tr> -->
  <router-link
    :event="printCheck() ? 'click' : ''"
    :style="printCheck() ? 'cursor:pointer' : ''"
    :to="{ name: 'qnaDetail', params: { QnAIndex: qnAIndex } }"
    tag="tr"
  >
    <td>{{ qnAIndex }}</td>
    <td class="text-start" v-if="printCheck()">
      {{ qnATitle }}
    </td>
    <td class="text-start" v-else>비공개 글입니다.</td>
    <td>{{ userId }}</td>
    <td>{{ qnARegtime }}</td>
  </router-link>

  <!-- </tr> -->
</template>

<script>
export default {
  name: "QnaListItem",
  props: {
    qnAIndex: Number,
    userId: String,
    qnARegtime: String,
    qnATitle: String,
    qnAContent: String,
    private1: Number,
  },
  data() {
    return {};
  },
  methods: {
    printCheck() {
      if (this.private1 === 1) {
        if (
          (this.$store.state.logined.userId.length > 0 &&
            this.$store.state.logined.userId.length < 6) ||
          this.$store.state.logined.userId === this.userId
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
  },
};
</script>

<style></style>
