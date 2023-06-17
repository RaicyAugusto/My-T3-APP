import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "~/styles/globals.css";
import { AtualizarProduto } from "./atualizar-produto";
import { CadastroProduto } from "../components/cadastroProduto";
import { Listagem } from "../components/listagemProduto";

const MyApp: AppType = ({ Component, pageProps }) => {
 const router = useRouter();
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
