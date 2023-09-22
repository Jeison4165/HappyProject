import '../styles/Letter.scss'
import photo_love from '../assets/images/photo_love.jpg'
import { Flower } from './Flower'
import { useEffect, useState } from 'react';

export const LetterMessage = () => {

    const [showFlower, setShowFlower] = useState(false);


    useEffect(() => {
        function handleScroll() {
            const scrollableContent = document.querySelector('.scrollable-content');
            const scrollPosition = scrollableContent.scrollTop;
            const contentHeight = scrollableContent.scrollHeight;
            const visibleHeight = scrollableContent.clientHeight;
            const scrollPercentage = (scrollPosition / (contentHeight - visibleHeight)) * 100;
    
            if (scrollPercentage >= 50) {
                setShowFlower(true);
            } else {
                setShowFlower(false);
            }
        }
    
        // Agregar el evento de desplazamiento cuando el componente se monta
        const scrollableContent = document.querySelector('.scrollable-content');
        scrollableContent.addEventListener('scroll', handleScroll);
    
        // Limpiar el evento cuando el componente se desmonta
        return () => {
            scrollableContent.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='container main_container_letter'>
            <div className="scrollable-content">
                <br></br>
                <p>
                    Que bonita... 🙈, algo en mi interior me decia que ibas a responder con un si 🥰🥰🥰 
                </p>
                <img src={photo_love} alt="" className="img-fluid rounded"/>
                <br /><br />
                <p>
                    Aunque la distancia física nos separe en este momento, quiero que sepas que siempre estás en mi corazón. <br></br><br></br>
                    Los eventos y las fechas especiales no seran distintos puesto que siempre habrá una forma ya sea de celebrarlos
                    o tener un gesto que nos haga sentir uno al lado del otro.
                </p>
                <p>
                    Eres una persona increíble y te admiro demasiado, aprecio cada momento que compartimos, así como todos los momentos que están por venir. 
                    
                </p>
                <br />
                <p>
                Te amo mi amor 🖤🖤🖤
                </p>
                <p>
                    Con cariño, feliz dia...
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
            </div>
            {showFlower && <Flower />}
        </div>
    )
}
