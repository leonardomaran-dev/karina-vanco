<script setup>
import { useServicesStore } from "@/stores/services";
import Card from "./ui/Card.vue";
import Clipboard from "./ui/icons/Clipboard.vue";
import Plus from "./ui/icons/Plus.vue";
import Bolt from "./ui/icons/Bolt.vue";
import Device from "./ui/icons/Device.vue";
import ClipboardCheck from "./ui/icons/ClipboardCheck.vue";
import User from "./ui/icons/User.vue";

const servicesStore = useServicesStore();
const services = servicesStore.getAllServices;

const getIconComponent = (iconName) => {
  const icons = {
    Clipboard,
    Plus,
    Bolt,
    Device,
    ClipboardCheck,
    User,
  };
  return icons[iconName];
};
</script>
<template>
  <section id="services" class="mb-16">
    <!-- Cabeçalho da Seção -->
    <div class="mb-8">
      <div class="flex items-center gap-4">
        <h2
          class="text-xl md:text-2xl font-bold text-primary pl-4 border-l-4 border-primary"
        >
          Serviços
        </h2>
        <div class="h-[1px] flex-1 bg-primary/20"></div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
      <Card
        v-for="service in services"
        :key="service.id"
        :title="service.title"
        :description="service.description"
      >
        <template #icon>
          <component :is="getIconComponent(service.icon)" color="#02A1AA" />
        </template>
      </Card>
    </div>
  </section>
</template>