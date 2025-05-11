<script setup>
defineProps({
  href: String,
  bg: String,
  textColor: String,
});
</script>
<template>
  <div
    class="flex justify-center sm:justify-start flex-wrap gap-2 sm:gap-4 mb-10"
  >
    <a
      :href="href"
      target="_blank"
      :class="[bg, textColor]"
      class="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_5px_15px_rgba(176,25,126,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(176,25,126,0.3)]"
    >
      <slot />
    </a>
  </div>
</template>