//importação com chaves é feita quando há metodo de export default

import { Router } from "express";
import multer from "multer"
import uploadConfig from "./config/multer"

//Criar
import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";
import { CriarCategoriaController } from "./controllers/Categorias/CriarCategoriaController";

//Listar
import { ListarClienteController } from "./controllers/Clientes/ListarClienteController";
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/Produtos/ListarProdutosController";
import { ListarCategoriaController } from "./controllers/Categorias/ListarCategoriaController";

//Listar Unico
import { ListarUnicoUsuarioController } from "./controllers/Usuarios/ListarUnicoUsuarioController";
import { ListarUnicoProdutoController } from "./controllers/Produtos/ListarUnicoProdutoController";
import { ListarUnicoClienteController } from "./controllers/Clientes/ListarUnicoClienteController";

//Apagar
import { ApagarProdutosController } from "./controllers/Produtos/ApagarProdutosController";
import { ApagarUsuarioController } from "./controllers/Usuarios/ApagarUsuarioController";
import { ApagarClienteController } from "./controllers/Clientes/ApagarClienteController";

//Alterar
import { AlterarUsuarioController } from "./controllers/Usuarios/AlterarUsuarioController";
import { AlterarProdutosController } from "./controllers/Produtos/AlterarProdutosController";
import { AlterarClienteController } from "./controllers/Clientes/AlterarClienteController";

//Login
import { AuthUsuarioController } from "./controllers/Usuarios/AuthUsuarioController";

const router = Router()
const envio = multer(uploadConfig.upload("./tmp"))

//Criar
router.post("/CriarUsuarios", new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.post("/CriarProdutos", envio.single("file"), new CriarProdutosController().handle)
router.post("/CriarCategoria", new CriarCategoriaController().handle)

//Listar
router.get("/ListarUsuarios", new ListarUsuarioController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)
router.get("/ListarProdutos/files", new ListarProdutosController().handle)
router.get("/ListarCategorias", new ListarCategoriaController().handle)

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