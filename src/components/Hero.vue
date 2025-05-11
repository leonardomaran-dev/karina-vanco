<script setup>
import Button from "./ui/Button.vue";
</script>
<template>
  <section
    class="mt-2 relative overflow-hidden mb-10 shadow-[0_10px_30px_rgba(176,25,126,0.1)] flex items-center rounded-xl"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-[url('@/assets/images/banner.jpg')] bg-cover bg-center"
    ></div>

    <!-- Overlay Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"
    ></div>

    <!-- Conteúdo Principal -->
    <div class="relative w-full z-10 max-h-[900px]">
      <div class="container mx-auto">
        <div
          class="w-full lg:w-[55%] p-4 md:p-8 flex flex-col justify-center gap-3"
        >
          <!-- Título e Subtítulo -->
          <h1
            class="text-4xl md:text-5xl font-bold text-primary mb-5 leading-tight"
          >
            Nutrição
            <span
              class="block relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-[100px] after:h-1 after:bg-primary after:rounded-md"
            >
              Personalizada
            </span>
          </h1>

          <p
            class="text-shadow-lg teste:max-w-[55%] text-lg md:text-xl text-black font-medium max-w-[70%] sm:max-w-[60%] mb-3 sm:mb-8 leading-relaxed"
          >
            Transforme sua saúde com um plano alimentar que respeita suas
            preferências e estilo de vida.
          </p>

          <!-- Botão -->

          <Button
            href="https://api.whatsapp.com/send?phone=5519991554942"
            bg="bg-secondary"
            textColor="text-white"
            >Agende uma consulta</Button
          >

          <!-- Estatísticas -->
          <div class="hidden sm:flex flex-wrap gap-8">
            <div class="flex flex-col">
              <span class="text-4xl font-bold text-primary">10+</span>
              <span class="text-sm text-gray-600">Anos de experiência</span>
            </div>
            <div class="flex flex-col">
              <span class="text-4xl font-bold text-primary">500+</span>
              <span class="text-sm text-gray-600">Pacientes atendidos</span>
            </div>
            <div class="flex flex-col">
              <span class="text-4xl font-bold text-primary">4.9/5</span>
              <span class="text-sm text-gray-600">Avaliação dos pacientes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>