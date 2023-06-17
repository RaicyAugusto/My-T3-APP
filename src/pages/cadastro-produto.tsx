import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import { api } from '~/utils/api';
import i18n from '~/utils/translation';

const CadastroProduto: NextPage = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [produtoCriado, setProdutoCriado] = useState(false);

  const { refetch: refetchProduto } = api.produto.getAll.useQuery();

  const createProduto = api.produto.create.useMutation({
    onSuccess: () => {
      refetchProduto();
      setProdutoCriado(true);
      reset();
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const preco = Number(data.preco);

      await createProduto.mutateAsync({
        nome: data.nome,
        subtitulo: data.subtitulo,
        descricao: data.descricao,
        preco: preco,
      });
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">{t('createProduct')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 max-w-sm">
          <div className="flex flex-col">
            <label htmlFor="languageSelect" className="mb-2">{t('selectLanguage')}</label>
            <select id="languageSelect" onChange={handleLanguageChange} className="border border-gray-300 p-2 rounded-md">
              <option value="pt">{t('portuguese')}</option>
              <option value="en">{t('english')}</option>
              <option value="es">{t('spanish')}</option>
            </select>
          </div>

          <input className="border border-gray-300 p-2 rounded-md" type="text" {...register('nome', { required: true })} placeholder={t('nome')} />
          {errors.nome && <span className="text-red-500">{t('required')}</span>}

          <input className="border border-gray-300 p-2 rounded-md" type="text" {...register('subtitulo', { required: true })} placeholder={t('subtitulo')} />
          {errors.subtitulo && <span className="text-red-500">{t('required')}</span>}

          <textarea className="border border-gray-300 p-2 rounded-md" {...register('descricao', { required: true })} placeholder={t('descricao')}></textarea>
          {errors.descricao && <span className="text-red-500">{t('required')}</span>}

          <input className="border border-gray-300 p-2 rounded-md" type="number" {...register('preco', { required: true })} placeholder={t('preco')} />
          {errors.preco && <span className="text-red-500">{t('required')}</span>}

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">{t('createProduct')}</button>
        </form>

        {produtoCriado && (
          <div className="mt-4 text-green-500">{t('produtoCriado')}</div>
        )}
      </div>
    </div>
  );
};

export default CadastroProduto;
