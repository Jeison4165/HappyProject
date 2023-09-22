import { useState } from "react"
import { Background } from "../components/Background"
import { QuestionDate } from "../components/QuestionDate"
import { NiceMessage } from "../components/NiceMessage"
import { LetterMessage } from "../components/LetterMessage"

export const Index = () => {
    const [questionCorrect, setQuestionCorrect] = useState(false)
    const [niceMessage, setNiceMessage] = useState(false)
    const [letterMessage, setLetterMessage] = useState(false)

    return (
        <>
            <Background></Background>
            { ! questionCorrect ?
                <>
                    <QuestionDate
                        setQuestionCorrect = {setQuestionCorrect}
                        setNiceMessage = {setNiceMessage}
                    />
                </>
            : null}
            { niceMessage ? 
                <NiceMessage
                    setNiceMessage = {setNiceMessage}
                    setLetterMessage = {setLetterMessage}
                />
            : null
            }
            {letterMessage ? 
                <LetterMessage
                />
            : null
            }
        </>
    )
}
