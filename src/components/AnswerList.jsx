import React from 'react'

const AnswerList = ({ quiz, handleJudge,currentNum }) => {

    return (
        <ul>
            {quiz[currentNum].answers.map((answer, index) => (
                <li key={index} onClick={handleJudge}>{answer}</li>
            ))}
        </ul>
    )
}

export default AnswerList