import './App.css';
import React from 'react';
const questions = [
  {
    title: 'Как называется еврейский Новый год?',
    variants: [
      'Ханука', 
      'Йом Кипур', 
      'Кванза', 
      'Рош ха-Шана'
    ],
    correct: 3,
  },
  {
    title: 'Кто из этих персонажей не дружит с Гарри Поттером?',
    variants: [
      'Рон Уизли', 
      'Невилл Лонгботтом', 
      'Драко Малфой',
      'Гермиона Грейнджер'
    ],
    correct: 2,
  },
  {
    title: 'Какое животное не фигурирует в китайском зодиаке?',
    variants: [
      'Дракон',
      'Кролик',
      'Собака',
      'Колибри',
    ],
    correct: 3,
  },
  {
    title: 'Какая компания владеет Bugatti, Bentley, Lamborghini, Audi и Porsche?',
    variants: [
      'BMW',
      'Mercedes',
      'FIAT',
      'Volkswagen ',
    ],
    correct: 3,
  },
  {
    title: 'Кто сыграл Нео в "Матрице"?',
    variants: [
      'Бред Питт',
      'Том Круз',
      'Киану Ривз',
      'Мэттью Макконахи ',
    ],
    correct: 2,
  },
];
function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='Победа!'/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href = '/'><button>Попробовать снова</button></a>
    </div>
  );
}
function Game({step, question, onClickVariant}) {

  const persent = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => {
          return <li key={item} onClick={() => onClickVariant(index)} >{item}</li>
        })}
      </ul>
    </>
  );
}
function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ?
        <Game 
          onClickVariant={onClickVariant}
          step={step}
          question={question} 
        /> : <Result correct={correct} />
      }
    </div>
  );
}
export default App;