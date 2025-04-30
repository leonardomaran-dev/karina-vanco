<template>
  <section
    class="relative overflow-hidden mb-10 shadow-[0_10px_30px_rgba(176,25,126,0.1)] xl:min-h-[calc(100vh-72px)] max-h-[900px] flex items-center"
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
    <div class="relative w-full z-10">
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
            class="text-lg md:text-xl text-gray-700 max-w-[600px] mb-5 sm:mb-8 leading-relaxed"
          >
            Transforme sua saúde com um plano alimentar que respeita suas
            preferências e estilo de vida.
          </p>

          <!-- Botões -->
          <div
            class="flex justify-center sm:justify-start flex-wrap gap-2 sm:gap-4 mb-10"
          >
            <a
              href="#sobre"
              class="inline-flex items-center justify-center bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 shadow-[0_5px_15px_rgba(176,25,126,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(176,25,126,0.3)]"
            >
              Conheça meu trabalho
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519991554942"
              target="_blank"
              class="inline-flex items-center justify-center bg-white text-primary px-7 py-3.5 rounded-full font-semibold text-base border-2 border-primary transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
            >
              Agende uma consulta
            </a>
          </div>

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