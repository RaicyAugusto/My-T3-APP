import { NextPage } from 'next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '~/utils/api';
import { i18n } from '~/utils/translation';

const Lista: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { data: produtos, refetch: refetchProdutos } = api.produto.getAll.useQuery();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    refetchProdutos();
  }, [i18n.language]);

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-4">{t('produtos')}</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => changeLanguage('pt')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Português
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Español
        </button>
      </div>
      {produtos &&
        produtos.map((p) => (
          <div key={p.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <h2 className="text-xl mb-2">
              {t('nome')}: {p.nome}
            </h2>
            <h2 className="text-gray-500 mb-2">
              {t('subtitulo')}: {p.subtitulo}
            </h2>
            <h2 className="mb-2">
              {t('descricao')}: {p.descricao}
            </h2>
            <h2 className="text-green-500">
              {t('preco')}: {p.preco}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Lista;
