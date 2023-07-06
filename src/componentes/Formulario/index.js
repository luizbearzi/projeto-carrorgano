import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

     const times = [
        'Corrida',
        'Passerio',
        'Diário',
        'Trabalho'
     ]

     const [carro, setCarro] = useState('')
     const [marca, setMarca] = useState('')
     const [imagem, setImagem] = useState('')
     const [time, setTime] = useState('')

     const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            carro,
            marca,
            imagem,
            time
        })
     }

    return(
        <section className='formulario'>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do Carro</h2>
                    <CampoTexto 
                    obrigatorio={true} 
                    label ="Carro" 
                    placeholder="Informe o carro"
                    valor={carro}
                    aoAlterado={valor => setCarro(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Marca" 
                    placeholder="Informe a marca"
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                    />
                    <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
        </section>
    )
}

export default Formulario