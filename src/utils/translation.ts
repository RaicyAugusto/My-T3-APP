import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const languages = ['pt', 'en', 'es'];

i18n.use(initReactI18next).init({
  lng: 'pt',
  fallbackLng: 'pt',
  whitelist: languages,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: {
      translation: {
        nome: 'Nome',
        subtitulo: 'Subtítulo',
        descricao: 'Descrição',
        preco: 'Preço',
        createProduct: 'Criar Produto',
        required: 'Este campo é obrigatório',
      },
    },
    en: {
      translation: {
        nome: 'Name',
        subtitulo: 'Subtitle',
        descricao: 'Description',
        preco: 'Price',
        createProduct: 'Create Product',
        required: 'This field is required',
      },
    },
    es: {
      translation: {
        nome: 'Nombre',
        subtitulo: 'Subtítulo',
        descricao: 'Descripción',
        preco: 'Precio',
        createProduct: 'Crear Producto',
        required: 'Este campo es obligatorio',
      },
    },
  },
} as InitOptions);

export default i18n;
