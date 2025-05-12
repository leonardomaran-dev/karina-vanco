<template>
  <div class="min-h-screen bg-neutral-50 py-7">
    <FlashMessage
      :show="flashMessage.show"
      :type="flashMessage.type"
      :title="flashMessage.title"
      :message="flashMessage.message"
      :onClose="hideFlashMessage"
    />
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
          <form
            @submit.prevent="handleSubmit"
            class="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="_next" value="/success" />
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
                  v-model="name"
                  type="text"
                  id="name"
                  name="name"
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
                  v-model="email"
                  type="email"
                  id="email"
                  name="email"
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
                v-model="subject"
                type="text"
                id="subject"
                name="_subject"
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
                v-model="message"
                id="message"
                name="message"
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
                class="bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="loading"
              >
                <span v-if="loading" class="animate-spin">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
                {{ loading ? "Enviando..." : "Enviar Mensagem" }}
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
              allowfullscreen
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import FlashMessage from "../components/ui/FlashMessage.vue";

const router = useRouter();
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const loading = ref(false);

const flashMessage = ref({
  show: false,
  type: "success",
  title: "",
  message: "",
});

function showFlashMessage(type, title, message) {
  flashMessage.value = {
    show: true,
    type,
    title,
    message,
  };

  setTimeout(() => {
    hideFlashMessage();
  }, 5000);
}

function hideFlashMessage() {
  flashMessage.value.show = false;
}

const handleSubmit = () => {
  loading.value = true;

  // Criando o objeto FormData com os dados do formulário
  const formData = new URLSearchParams();
  formData.append("form-name", "contact");
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("_subject", subject.value);
  formData.append("message", message.value);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  })
    .then(() => {
      router.push("/");
      showFlashMessage(
        "success",
        "Mensagem Enviada!",
        "Obrigado por entrar em contato! Recebemos sua mensagem e retornaremos em breve."
      );
      console.log("deu certo");
    })
    .catch((err) => {
      console.log("Erro ao enviar email", err);
      showFlashMessage(
        "error",
        "Erro!",
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>