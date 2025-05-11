<template>
  <div class="min-h-screen bg-neutral-50 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="text-green-500 mb-6">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-primary mb-4">Mensagem Enviada!</h1>
          <p class="text-gray-600 mb-8">
            Obrigado por entrar em contato! Recebemos sua mensagem e retornaremos em breve.
          </p>
          <router-link
            to="/"
            class="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Voltar para o Início
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>