<script setup>
defineProps({
  title: String,
  description: String,
});
</script>
<template>
  <!-- container  -->
  <div
    class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
  >
    <!-- ícone -->
    <slot name="icon" />

    <!-- conteúdo -->

    <h3 class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 hidden md:block">
      {{ description }}
    </p>
  </div>
</template>