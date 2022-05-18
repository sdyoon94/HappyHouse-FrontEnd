<template>
  <tr>
    <router-link :to="{ name: 'qnaDetail', params: { QnAIndex: QnAIndex } }">
      <td>{{ QnAIndex }}</td>
      <td>
        {{ QnATitle }}
      </td>
      <td>{{ userId }}</td>
      <td>{{ QnARegtime }}</td>
    </router-link>
  </tr>
</template>

<script>
export default {
  name: "QnaListItem",
  props: {
    QnAIndex: Number,
    userId: String,
    QnARegtime: String,
    QnATitle: String,
    QnAContent: String,
    public: Boolean,
  },
};
</script>

<style></style>
