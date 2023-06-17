import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const goToAtualizarProduto = () => {
    router.push("/atualizar-produto");
  };

  const goToCadastroProduto = () => {
    router.push("/cadastro-produto");
  };

  const goToListagemProduto = () => {
    router.push("/lista-produto");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Home Page</h1>
      <div className="space-x-4">
        <button
          onClick={goToAtualizarProduto}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Atualizar Produto
        </button>
        <button
          onClick={goToCadastroProduto}
          className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
        >
          Cadastrar Produto
        </button>
        <button
          onClick={goToListagemProduto}
          className="px-4 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600"
        >
          Lista de Produtos
        </button>
      </div>
    </div>
  );
};

export default Home;
