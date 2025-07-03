import '../App.css'
import Star from '../assets/icon-star.svg';
import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';


export default function FaqAccordion({ questions, showAnswer, }) {
  console.log(questions);

  const displayQuestion = questions.map(question => {
    return <div key={question.id}>
              <div className='flex pb-300 pt-300 items-center justify-between '>
                <div className='text-xs sm:text-sm font-semibold text-purple-950 w-[225px] sm:w-auto'>{question.question}</div>
                <button onClick={() => showAnswer(question.id)} className='w-[30px] h-[30px] rounded-full'><img className='w-[30px] h-[30px] ' src={question.show ? minusIcon : plusIcon} alt="plus icon" /></button>
              </div>  
              {question.show ? <p className='text-xxs sm:text-xs text-purple-600 mb-300'>{question.answer}</p> : null}
              {question.id === questions[questions.length - 1].id ? null : <hr className='opacity-25' />}
            </div>
  });

  return (
    <>
      <section className='flex justify-center items-center h-[]'>
        <div className='bg-white h-auto flex flex-col gap-300 p-300 sm:p-500 rounded-lg sm:max-w-[37.5rem] sm:gap-400 absolute top-[130.5px] sm:top-[165.7px]'>
          <div className='flex h-[38px] items-center'>
            <img className='w-[24px] h-[24px] sm:w-[40px] md:h-[40px] ' src={Star} alt="star icon" />
            <h1 className='text-md font-bold ml-300 text-purple-950 sm:text-lg '>FAQS</h1>
          </div>
          <div className='flex flex-col'>
            {displayQuestion}
          </div>
        </div>
      </section>
    </>
  )
}

