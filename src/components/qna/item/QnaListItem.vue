<template>
  <tr>
    <router-link :to="{ name: 'qnaDetail', params: { QnAIndex: qnAIndex } }">
      <td>{{ qnAIndex }}</td>
      <td>
        {{ qnATitle }}
      </td>
      <td>{{ userId }}</td>
      <td>{{ qnARegtime }}</td>
    </router-link>
  </tr>
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
    public: Boolean,
  },
};
</script>

<style></style>
