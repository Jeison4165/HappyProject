import { useState } from 'react'
import '../styles/ButtonDeny.scss'

export const NiceMessage = ({setNiceMessage, setLetterMessage}) => {

    const [position, setPosition] = useState({ top: '0%', left: '0%' })

    const getRandomPosition = () => {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const randomTop = `-${Math.floor(Math.random() * (windowHeight - 10 + 1))}px`
        const randomLeft = `-${Math.floor(Math.random() * (60))+30}px`
        setPosition({ top: randomTop, left: randomLeft })
    }

    const accept = () => {
        console.log('ESTA ACEPTANDO...')
        setLetterMessage(true)
        setNiceMessage(false)
    }

    return (
        <div className='container main_container'>
            <br></br>
            <h4 className='mb-5'>Owwww, acertaste... 🥰🥰🥰 </h4>
            <h4 className='mb-5'>Siento que tenemos mucho que hacer, por sentir, por experimentar, por vivir, por ser TODO. </h4>
            <h4 className='mb-5'>¿Quieres seguir siendo mi novia hermosa?</h4>

            <div className="row">
                <div className="col-6">
                    <button
                        className="btn btn-success"
                        onClick={accept}>
                        <h5>Si 😍 </h5>
                    </button>
                </div>
                <div className="col-6">
                    <button
                        className="btn btn-danger btn_deny"
                        style={{ top: position.top, left: position.left }}
                        onClick={getRandomPosition}>
                        <h5>No 😕 </h5>
                    </button>
                </div>
            </div>

        </div>
    )
}
