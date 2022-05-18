<template>
  <tr>
    <td>{{ commentContent }}</td>
    <td>{{ commentRegtime }}</td>
  </tr>
  <!-- <tr>
    
      <td>{{ QnAIndex }}</td>
      <td>
        {{ QnATitle }}
      </td>
      <td>{{ userId }}</td>
      <td>{{ QnARegtime }}</td>
  </tr> -->
</template>

<script>
export default {
  name: "QnaCommentItem",
  props: {
    commentIndex: Number,
    commentContent: String,
    commentRegtime: String,
    QnAIndex: Number,
  },
};
</script>

<style></style>
