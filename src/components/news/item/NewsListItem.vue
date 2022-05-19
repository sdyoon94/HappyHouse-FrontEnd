<template>
  <a :href="articleUrl">
    <tr>
      <td><img :src="imgUrl" alt="" width="80" /></td>
      <td>
        {{ articleTitle }}
        <tr>
          <td>{{ articleContent }}</td>
        </tr>
      </td>
    </tr></a
  >
</template>

<script>
export default {
  name: "NewsListItem",
  props: {
    imgUrl: String,
    articleTitle: String,
    articleContent: String,
    articleUrl: String,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
  text-decoration-line: none;
}
</style>
