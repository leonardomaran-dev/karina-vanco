<template>
  <header class="sticky top-0 z-50 bg-primary shadow-md py-3">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-5">
        <!-- Logo -->
        <router-link
          to="/"
          class="block transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="@/assets/images/logo-white.png"
            alt="Logo"
            class="w-[100px] drop-shadow-md"
          />
        </router-link>

        <!-- Menu Hamburguer para Mobile -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-white focus:outline-none hover:bg-white/10 p-2 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Menu de Navegação -->
        <nav
          :class="[
            isMenuOpen ? 'translate-x-0' : '-translate-x-full',
            'md:translate-x-0 fixed md:static top-[72px] left-0 w-full md:w-auto h-[calc(100vh-72px)] md:h-auto bg-primary md:bg-transparent transition-transform duration-300 ease-in-out md:transition-none border-t border-white/10 md:border-0',
          ]"
        >
          <ul
            class="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-0 items-center"
          >
            <li v-for="(item, index) in menuItems" :key="index">
              <a
                v-if="item.path === '/'"
                href="#"
                @click.prevent="scrollToTop"
                class="text-white font-medium text-lg block py-2 relative transition-all duration-300 md:hover:text-white/90 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-[width] after:duration-300 md:hover:after:w-full router-link-active:font-bold router-link-active:after:w-full"
              >
                {{ item.name }}
              </a>
              <a
                v-else-if="item.path.startsWith('#')"
                :href="item.path"
                @click.prevent="scrollToSection(item.path.substring(1))"
                class="text-white font-medium text-lg block py-2 relative transition-all duration-300 md:hover:text-white/90 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-[width] after:duration-300 md:hover:after:w-full router-link-active:font-bold router-link-active:after:w-full"
              >
                {{ item.name }}
              </a>
              <router-link
                v-else
                :to="item.path"
                class="text-white font-medium text-lg block py-2 relative transition-all duration-300 md:hover:text-white/90 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:transition-[width] after:duration-300 md:hover:after:w-full router-link-active:font-bold router-link-active:after:w-full"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Serviços", path: "#services" },
  { name: "Contato", path: "/contact" },
];

const scrollToTop = () => {
  if (router.currentRoute.value.path !== "/") {
    router.push("/").then(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  isMenuOpen.value = false;
};

const scrollToSection = (sectionId) => {
  if (router.currentRoute.value.path !== "/") {
    router.push("/").then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
  isMenuOpen.value = false;
};

// Adicionar o watcher para a rota
onMounted(() => {
  router.afterEach(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
</script>