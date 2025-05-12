<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="show" 
      :class="[
        'fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md z-50 transform transition-all duration-500',
        type === 'success' ? 'bg-green-50' : 'bg-red-50'
      ]"
    >
      <div class="flex items-start gap-3">
        <div :class="[
          'flex-shrink-0',
          type === 'success' ? 'text-green-500' : 'text-red-500'
        ]">
          <svg v-if="type === 'success'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 :class="[
            'text-lg font-medium mb-1',
            type === 'success' ? 'text-green-800' : 'text-red-800'
          ]">
            {{ title }}
          </h3>
          <p :class="[
            'text-sm',
            type === 'success' ? 'text-green-700' : 'text-red-700'
          ]">
            {{ message }}
          </p>
        </div>
        <button 
          @click="onClose"
          class="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md"
        >
          <span class="sr-only">Fechar</span>
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div 
        :class="[
          'absolute bottom-0 left-0 h-1 transition-all duration-5000 rounded-b-lg',
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        ]"
        :style="{ width: '100%', animation: 'shrinkBar 5s linear forwards' }"
      ></div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes shrinkBar {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>