<template>
  <div class="min-h-screen bg-neutral-50 py-7">
    <div class="container mx-auto px-4">
      <!-- Cabeçalho da Seção -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-primary mb-4">Entre em Contato</h1>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Tem alguma dúvida ou gostaria de agendar uma consulta? Preencha o
          formulário abaixo e entrarei em contato o mais breve possível.
        </p>
      </div>

      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        <!-- Formulário de Contato -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-primary mb-6">
            Me mande uma mensagem
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nome -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Digite seu nome"
                />
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <!-- Assunto -->
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Digite o assunto"
              />
            </div>

            <!-- Mensagem -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>

            <!-- Botão de Envio -->
            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="loading"
                class="bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span v-if="!loading">Enviar Mensagem</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                      fill="none"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Mapa e Informações -->
        <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
          <h2 class="text-2xl font-semibold text-primary mb-6">Localização</h2>
          <div
            class="relative w-full h-[400px] rounded-xl overflow-hidden mb-6"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.100489285118!2d-46.768231525854965!3d-21.969106005031378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cbbe0f2f16b5%3A0x5e6363431294b0aa!2sKarina%20Van%C3%A7o%20-%20Nutricionista%20Cl%C3%ADnica%20Esportiva%20em%20S%C3%A3o%20Jo%C3%A3o%20da%20Boa%20Vista!5e0!3m2!1spt-BR!2sbr!4v1745902658576!5m2!1spt-BR!2sbr"
              class="w-full h-full"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="text-gray-600">
            <p class="mb-2">
              <strong>Endereço:</strong><br />
              Rua Orlando Fracari, 435<br />
              Recanto do Bosque<br />
              São João da Boa Vista - SP
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const loading = ref(false);
const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = async () => {
  loading.value = true;
  try {
    // Aqui você pode implementar a lógica de envio do email
    // Por exemplo, usando uma API ou serviço de email
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpar formulário
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (error) {
    alert("Erro ao enviar mensagem. Tente novamente.");
  } finally {
    loading.value = false;
  }
};
</script>