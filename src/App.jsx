import { useState } from 'react';
import './App.css'
import AnswerList from './components/AnswerList';
import GameOver from './components/GameOver';

function App() {
  const [num, setNum] = useState(0); //useStateの中に初期値

  const quiz = [
    { quiz: '昔話『わらしべ長者』で、主人公の男がアブの付いたわらと最初に交換したものは何でしょう？', answers: ['みかん', 'りんご'], correct: 'みかん' },
    { quiz: '新型コロナウイルス感染症の流行下に2020年4月から日本国内で配布が開始されたガーゼ製布マスクのことを、当時の内閣総理大臣であった人物から俗に何というでしょう？', answers: ['アマイマスク', 'アベノマスク'], correct: 'アベノマスク' },
    { quiz: 'アメリカの自動車レース・インディ500で、優勝者が表彰台で飲むことが恒例となっているものといえば何でしょう？', answers: ['オレンジ', '牛乳'], correct: '牛乳' }
  ]

  const [currentNum, setCrrentNum] = useState(0);
  const [score, setScore] = useState(0);

  //イベントe
  const handleJudge = (e) => {
    if (e.target.innerText === quiz[currentNum].correct) {
      alert('正解');
      setScore(score + 1);
    } else {
      alert('不正解')
    }

    setCrrentNum(currentNum + 1);
  }

  return (
    <>
      {
        quiz.length === currentNum ? (
          <GameOver score={score}/>
        ) : (
          <div>
            <h1>{quiz[currentNum].quiz}</h1>
            <AnswerList quiz={quiz} handleJudge={handleJudge} currentNum={currentNum} />
            <p>正解数: {score}</p>
          </div>
        )
      }
    </>
  )
}

export default App
