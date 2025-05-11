import { defineStore } from 'pinia';

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [
      {
        id: 1,
        title: 'Consulta Nutricional',
        description: 'Avaliação completa e personalizada para suas necessidades específicas',
        icon: 'Clipboard',
      },
      {
        id: 2,
        title: 'Reeducação Alimentar',
        description: 'Aprenda a desenvolver uma relação saudável com a alimentação.',
        icon: 'Plus',
      },
      {
        id: 3,
        title: 'Nutrição Esportiva',
        description: 'Planejamento nutricional para melhorar seu desempenho físico.',
        icon: 'Bolt',
      },
      {
        id: 4,
        title: 'Intolerância Alimentar',
        description: 'Aquele cuidado na hora de detectar qualquer intolerância e alergia alimentar, controle e prevenção.',
        icon: 'Device',
      },
      {
        id: 5,
        title: 'Controle de patologias',
        description: 'Vou analisar e/ou solicitar caso seja necessário seus exames laboratoriais e elaborar junto com você o melhor cardápio.',
        icon: 'ClipboardCheck',
      },
      {
        id: 6,
        title: 'Avaliação corporal',
        description: ' Com a avaliação corporal, você terá acesso a dados precisos sobre sua composição de massa muscular e gordura.',
        icon: 'User',
      },
    ]
  }),

  getters: {
    getAllServices: (state) => state.services,

    getServiceById: (state) => (id) => {
      return state.services.find(service => service.id === id);
    }
  }
});