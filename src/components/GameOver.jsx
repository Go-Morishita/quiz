import React from 'react'

const GameOver = ({ score }) => {
    return (
        <div className="">
            <div>GameOver</div>
            <p>あなたの正解数は{score}問でした。</p>
            {
                score >= 2 ?(
                    <p>すごい</p>
                ) : (
                    <p>ダメダメ</p>
                )
            }
        </div>
    )
}

export default GameOver