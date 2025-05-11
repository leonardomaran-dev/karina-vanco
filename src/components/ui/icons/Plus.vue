<script setup>
defineProps({
  color: {
    type: String,
    default: "#000",
  },
});
</script>
<template>
  <div
    class="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
  >
    <svg
      class="text-primary w-8 h-8"
      fill="none"
      :stroke="color"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </div>
</template>