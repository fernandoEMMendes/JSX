

function Home() {
    return (
        <div>
            <div>
                <h1>Cliente</h1>
                <form>
                    <label >Nome Completo</label> <br />
                    <input type="text" name="nome" /> <br />

                    <label>Telefone Fixo</label> <br />
                    <input type="text" name="tel_fixo" /> <br />

                    <label>Telefone Celular</label> <br />
                    <input type="text" name="tel_cel" /> <br />

                    <label>Rua</label> <br />
                    <input type="text" name="rua" /> <br />

                    <label>complemento</label> <br />
                    <input type="text" name="complemento" /> <br />

                    <label>cep</label> <br />
                    <input type="text" name="cep" /> <br />

                    <label>bairro</label> <br />
                    <input type="text" name="bairro" /> <br />

                    <label>cidade</label> <br />
                    <input type="text" name="cidade" /> <br />

                    <label>estado</label> <br />
                    <input type="text" name="estado" /> <br />

                    <button type="submit">submit</button>
                </form>
            </div>

            <h1>Pessoa Fisica</h1>
            <div>
                <form>
                    <label>cpf</label> <br />
                    <input type="text" name="cpf" /> <br />

                    <label>rg</label> <br />
                    <input type="text" name="rg" /> <br />

                    <label>Data Nascimento</label> <br />
                    <input type="text" name="data_nas" /> <br />

                    <button type="submit">submit</button>
                </form>
            </div>

            <h1>Pessoa Juridica</h1>
            <div>
                <form>
                    <label>cnpj</label> <br />
                    <input type="text" name="cnpj" /> <br />

                    <label>ie</label> <br />
                    <input type="text" name="ie" /> <br />

                    <label>situação cadastral</label> <br />
                    <input type="text" name="sit_cadastro" /> <br />

                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home