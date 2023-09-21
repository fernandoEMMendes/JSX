import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";

import { ListarClienteController } from "./controllers/Clientes/ListarClienteController";
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/Produtos/ListarProdutosController";

import { ListarUnicoUsuarioController } from "./controllers/Usuarios/ListarUnicoUsuarioController";
import { ListarUnicoProdutoController } from "./controllers/Produtos/ListarUnicoProdutoController";
import { ListarUnicoClienteController } from "./controllers/Clientes/ListarUnicoClienteController";

import { ApagarProdutosController } from "./controllers/Produtos/ApagarProdutosController";
import { ApagarUsuarioController } from "./controllers/Usuarios/ApagarUsuarioController";
import { ApagarClienteController } from "./controllers/Clientes/ApagarClienteController";

import { AlterarUsuarioController } from "./controllers/Usuarios/AlterarUsuarioController";
import { AlterarProdutosController } from "./controllers/Produtos/AlterarProdutosController";
import { AlterarClienteController } from "./controllers/Clientes/AlterarClienteController";

import { AuthUsuarioController } from "./controllers/Usuarios/AuthUsuarioController";

const router = Router()

//Criar
router.post("/CriarUsuarios", new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.post("/CriarProdutos", new CriarProdutosController().handle)

//Listar
router.get("/ListarUsuarios", new ListarUsuarioController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)
router.get("/ListarProdutos", new ListarProdutosController().handle)

//Listar Unico
router.get("/ListarUnicoUsuario/:id", new ListarUnicoUsuarioController().handle)
router.get("/ListarUnicoProduto/:id", new ListarUnicoProdutoController().handle)
router.get("/ListarUnicoCliente/:id", new ListarUnicoClienteController().handle)

//Apagar
router.delete("/DeletarProdutos", new ApagarProdutosController().handle)
router.delete("/DeletarUsuarios", new ApagarUsuarioController().handle)
router.delete("/DeletarClientes", new ApagarClienteController().handle)

//Alterar
router.put("/AlterarUsuario", new AlterarUsuarioController().handle)
router.put("/AlterarProdutos", new AlterarProdutosController().handle)
router.put("/AlterarCliente", new AlterarClienteController().handle)

//Login
router.post("/AuthLogin", new AuthUsuarioController().handle)


export { router }