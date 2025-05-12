<script setup>
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Services from "@/components/Services.vue";
import FlashMessage from "../components/ui/FlashMessage.vue";
import { ref, onMounted } from "vue";

const flashMessage = ref({
  show: false,
  type: "success",
  title: "",
  message: "",
});

function hideFlashMessage() {
  flashMessage.value.show = false;
  localStorage.removeItem("flashMessage");
}

onMounted(() => {
  const savedFlashMessage = localStorage.getItem("flashMessage");
  if (savedFlashMessage) {
    flashMessage.value = JSON.parse(savedFlashMessage);
    setTimeout(() => {
      hideFlashMessage();
    }, 5000);
  }
});
</script>

<template>
  <div>
    <FlashMessage
      v-if="flashMessage.show"
      :show="flashMessage.show"
      :type="flashMessage.type"
      :title="flashMessage.title"
      :message="flashMessage.message"
      :onClose="hideFlashMessage"
    />
    <Hero />
    <AboutMe />
    <Services />
  </div>
</template>