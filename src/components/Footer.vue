<template>
  <footer class="bg-primary text-white pt-10 pb-2 px-4 shadow-lg">
    <div class="max-w-7xl mx-auto flex flex-col items-center">
      <!-- Conteúdo Principal do Footer -->
      <div
        class="w-full max-w-[1000px] flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-center"
      >
        <!-- Seção de Contato -->
        <div
          class="flex-1 min-w-[250px] flex flex-col items-center self-stretch justify-center"
        >
          <h3 class="text-xl font-semibold mb-2">Contato</h3>
          <div class="h-[3px] w-[60px] bg-white/50 rounded mb-6"></div>

          <ul class="flex flex-col gap-4 items-center">
            <li class="flex items-center gap-4">
              <div
                class="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center p-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span class="text-center">
                Rua Orlando Fracari, 435 <br />
                Recanto do Bosque
              </span>
            </li>
            <li class="flex items-center gap-4">
              <div
                class="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center p-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span>karina_nutri13@hotmail.com</span>
            </li>
          </ul>
        </div>

        <!-- Logo Central -->
        <div class="px-5 order-first lg:order-none self-center">
          <img
            src="@/assets/images/logo-white.png"
            alt="Logo"
            class="max-w-[150px] drop-shadow-lg"
          />
        </div>

        <!-- Redes Sociais -->
        <div
          class="flex-1 min-w-[250px] flex flex-col items-center self-stretch justify-center"
        >
          <h3 class="text-xl font-semibold mb-2">Redes Sociais</h3>
          <div class="h-[3px] w-[60px] bg-white/50 rounded mb-6"></div>

          <div class="flex gap-4 justify-center">
            <a
              href="https://www.facebook.com/drakarinavanco"
              target="_blank"
              class="w-[45px] h-[45px] bg-white/15 rounded-full flex items-center justify-center transition-all duration-300 xl:hover:-translate-y-1 xl:hover:bg-white/25 cursor-default xl:cursor-pointer"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/karinavanconutri/"
              target="_blank"
              class="w-[45px] h-[45px] bg-white/15 rounded-full flex items-center justify-center transition-all duration-300 xl:hover:-translate-y-1 xl:hover:bg-white/25 cursor-default xl:cursor-pointer"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"
                />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519991554942"
              target="_blank"
              class="w-[45px] h-[45px] bg-white/15 rounded-full flex items-center justify-center transition-all duration-300 xl:hover:-translate-y-1 xl:hover:bg-white/25 cursor-default xl:cursor-pointer"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.01 3.92A10.96 10.96 0 0012.03 1a11 11 0 00-9.81 15.88L1 23l6.23-1.63a10.97 10.97 0 005.24 1.33h.005a11 11 0 00.002-22zm-7.98 16.9h-.004a9.12 9.12 0 01-4.65-1.27l-.334-.198-3.46.908.924-3.377-.217-.345a9.13 9.13 0 01-1.4-4.89 9.14 9.14 0 019.15-9.14c2.44 0 4.74.952 6.47 2.68a9.108 9.108 0 012.68 6.47 9.14 9.14 0 01-9.14 9.14zm5.015-6.843c-.27-.135-1.6-.79-1.85-.881-.25-.091-.43-.135-.61.135-.18.27-.697.881-.854 1.063-.157.18-.314.203-.584.068-.27-.135-1.14-.42-2.17-1.338a8.12 8.12 0 01-1.5-1.865c-.158-.27-.017-.416.118-.55.122-.122.27-.317.405-.476.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.476-.067-.135-.607-1.464-.832-2.004-.219-.527-.44-.455-.607-.463a10.89 10.89 0 00-.52-.009.998.998 0 00-.72.338c-.247.27-.944.922-.944 2.25 0 1.327.968 2.61 1.103 2.79.135.18 1.91 2.916 4.626 4.088.646.279 1.15.446 1.542.571.648.206 1.238.177 1.704.107.52-.077 1.6-.653 1.825-1.284.225-.63.225-1.17.158-1.284-.068-.113-.248-.181-.518-.316z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="w-full text-center mt-10 pt-5 border-t border-white/20">
        <p class="text-sm text-white/80">
          © {{ new Date().getFullYear() }} Karina Vanço - Nutricionista | Todos
          os direitos reservados
        </p>
      </div>
    </div>
  </footer>
</template>