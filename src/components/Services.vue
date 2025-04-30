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

    <!-- Grid de Serviços -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
      <!-- Card 1: Consulta Nutricional -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Consulta Nutricional
        </h3>
        <p class="text-gray-600 hidden md:block">
          Avaliação completa e personalizada para suas necessidades específicas.
        </p>
      </div>

      <!-- Card 2: Reeducação Alimentar -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
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
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Reeducação Alimentar
        </h3>
        <p class="text-gray-600 hidden md:block">
          Aprenda a desenvolver uma relação saudável com a alimentação.
        </p>
      </div>

      <!-- Card 3: Nutrição Esportiva -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Nutrição Esportiva
        </h3>
        <p class="text-gray-600 hidden md:block">
          Planejamento nutricional para melhorar seu desempenho físico.
        </p>
      </div>

      <!-- Card 4: Intolerância Alimentar -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
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
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Intolerância Alimentar
        </h3>
        <p class="text-gray-600 hidden md:block">
          Aquele cuidado na hora de detectar qualquer intolerância e alergia
          alimentar, controle e prevenção.
        </p>
      </div>

      <!-- Card 5: Controle de patologias -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
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
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Controle de patologias
        </h3>
        <p class="text-gray-600 hidden md:block">
          Vou analisar e/ou solicitar caso seja necessário seus exames
          laboratoriais e elaborar junto com você o melhor cardápio.
        </p>
      </div>

      <!-- Card 6: Avaliação corporal -->
      <div
        class="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md xl:hover:shadow-xl transition-all duration-300 xl:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div
          class="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 xl:group-hover:scale-110 xl:transition-transform"
        >
          <svg
            class="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h3
          class="text-base md:text-xl font-semibold text-gray-800 mb-0 md:mb-3"
        >
          Avaliação corporal
        </h3>
        <p class="text-gray-600 hidden md:block">
          Com a avaliação corporal, você terá acesso a dados precisos sobre sua
          composição de massa muscular e gordura.
        </p>
      </div>
    </div>
  </section>
</template>