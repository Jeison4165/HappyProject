import { useState } from 'react';
import '../styles/BlackHeart.scss'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const QuestionDate = ({setQuestionCorrect, setNiceMessage}) => {

    const [isCorrect, setIsCorrect] = useState(true)
    const [randomEmoji, setRandomEmoji] = useState(0)

    const optionsBreakHeart = [
        <h1>¿En serio? 💔😭 </h1>,
        <h1>¿? 😰 </h1>,
        <h1>¿De verdad? 😩 </h1>,
        <h1>¿Te ayudo? 😮 </h1>,
    ]

    const optionOne = new Date('Sun Jan 08 2023');
    const optionTwo = new Date('Mon Apr 17 2023');

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        // if (date && (date.toDateString() === optionOne.toDateString() || 
        //     date.toDateString() === optionTwo.toDateString() ) ) {
        //     setSelectedDate(date)
        //     setQuestionCorrect(true)
        //     setNiceMessage(true)
        // }else{
        //     setIsCorrect(false)
        //     setRandomEmoji(Math.floor(Math.random() * 4))
        // }
        setQuestionCorrect(true)
        setNiceMessage(true)
    };

    return (
        <div className='container main_container'>
            <h1 className='heart_black'>🖤</h1>
            <br></br>
            <h4 className='mb-5'>Para los dos ... recuerdas alguna fecha especial?</h4>
            <DatePicker
                className='mb-4'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
            />
            {isCorrect === false ? 
                optionsBreakHeart[randomEmoji] : null }
        </div>
    )
}
