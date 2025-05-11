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
  <div 
    v-if="show" 
    :class="[
      'fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-500 z-50',
      type === 'success' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
    ]"
  >
    <div class="flex items-center gap-3">
      <div v-if="type === 'success'" class="text-green-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div v-else class="text-red-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div class="flex-1">
        <p :class="[
          'font-semibold',
          type === 'success' ? 'text-green-800' : 'text-red-800'
        ]">
          {{ title }}
        </p>
        <p :class="[
          'text-sm',
          type === 'success' ? 'text-green-600' : 'text-red-600'
        ]">
          {{ message }}
        </p>
      </div>
      <button 
        @click="onClose"
        class="text-gray-400 hover:text-gray-500"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</template>