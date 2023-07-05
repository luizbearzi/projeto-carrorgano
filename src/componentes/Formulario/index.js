import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

     const times = [
        'Corrida',
        'Passerio',
        'Diário',
        'Trabalho'
     ]

     const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
     }

    return(
        <section className='formulario'>
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do Carro</h2>
                    <CampoTexto obrigatorio={true} label ="Carro" placeholder="Informe o carro"/>
                    <CampoTexto obrigatorio={true} label="Marca" placeholder="Informe a marca"/>
                    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                    <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
        </section>
    )
}

export default Formulario