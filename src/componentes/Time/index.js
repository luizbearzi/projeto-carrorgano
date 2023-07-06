import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='time' style={ css }>
            <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador carro={colaborador.carro} marca={colaborador.marca} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time