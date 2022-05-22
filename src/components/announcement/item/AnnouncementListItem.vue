<template>
  <!-- <tr> -->
  <router-link
    :to="{
      name: 'announcementDetail',
      params: { announcementNo: announcementNo },
    }"
    tag="tr"
    style="cursor: pointer"
  >
    <td>{{ announcementNo }}</td>
    <td class="text-start">
      {{ subject }}
    </td>
    <td>{{ userid }}</td>
    <td>{{ regtime }}</td>
  </router-link>
  <!-- </tr> -->
</template>

<script>
export default {
  name: "announcementListItem",
  props: {
    announcementNo: Number,
    userid: String,
    regtime: String,
    subject: String,
    content: String,
  },
};
</script>

<style></style>
