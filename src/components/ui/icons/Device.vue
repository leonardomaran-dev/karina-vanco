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
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </div>
</template>