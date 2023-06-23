

function Home() {
    return (
        <div>
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
    )
}

export default Home