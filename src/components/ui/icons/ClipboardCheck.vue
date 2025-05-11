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
      class="text-primary w-8 h-"
      fill="none"
      :stroke="color"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  </div>
</template>