<!-- 
   div 구성 위치
          left_side                           right_side
left_content    right_content         left_content    right_content

-->

<template>
  <div class="contact">
    <contact-developer-1></contact-developer-1>
    <contact-developer-2></contact-developer-2>
  </div>
</template>

<script>
import ContactDeveloper1 from "@/components/contact/ContactDeveloper1.vue";
import ContactDeveloper2 from "../components/contact/ContactDeveloper2.vue";

export default {
  name: "ContactView",
  components: { ContactDeveloper1, ContactDeveloper2 },
};
</script>

<style></style>
