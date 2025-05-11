<script setup>
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
</script>
<template>
  <div class="min-h-screen font-primary bg-neutral-200">
    <Navbar />
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
    <Footer />
  </div>
</template>