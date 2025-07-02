import '../App.css'
import Star from '../assets/icon-star.svg';
import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';

export default function FaqAccordion() {
  const questions = [
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.`,
    }, 
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels.`,
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                way to showcase your skills to potential employers!`,
    }, 
    {
      id: 4,
      question: "How can I get help when I'm stuck on a challenge?",
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                channel where you can ask questions and seek support from other community members.`,
    },
  ];

  const displayQuestion = questions.map(question => {
    return <div key={question.id}>
              <div className='flex pb-300 pt-300 items-center justify-between '>
                <div className='text-xs sm:text-sm font-semibold text-purple-950 w-[225px] sm:w-auto'>{question.question}</div>
                <button className='w-[30px] h-[30px] rounded-full'><img className='w-[30px] h-[30px] ' src={plusIcon} alt="plus icon" /></button>
              </div>  
              <p className=' hidden text-xxs sm:text-xs text-purple-600 mb-300'>{question.answer}</p>
              {question.id === questions[questions.length - 1].id ? null : <hr className='opacity-25' />}
            </div>
  });

  return (
    <>
      <section className=''>
        <div className='bg-white h-auto flex flex-col gap-300 p-300 sm:p-500 rounded-lg absolute w-[327px] sm:w-[600px] relative  sm:gap-400 ml-300 sm:ml-[88px] mr-300 sm:mrs-[80px] top-[130.5px] sm:top-[167.5px]'>
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

