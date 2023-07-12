import { FC, useState } from 'react';
import './index.css';
import { AgeState, DateFields, ErrorMessages } from './interface';

type AgeCalculatorProps = {}

export const AgeCalculator: FC<AgeCalculatorProps> = () => {

  const initialErrorState = {
    day: '',
    month: '',
    year: ''
  }

  const initialFields = {
    day: '',
    month: '',
    year: ''
  }

  const initialAgeState = {
    day: 0,
    month: 0,
    year: 0
  }
  const [date, setDate] = useState<DateFields>(initialFields)
  const [ageState, setAgeState] = useState<AgeState>(initialAgeState)
  const [button, setButton] = useState(false)
  const [error, setError] = useState<ErrorMessages>(initialErrorState)

  const handleDate = (fieldValue: string, propertyName: string) => {
    setDate({
      ...date,
      [`${propertyName}`]: fieldValue
    })
  }

  console.log(date);
  const calculateDate = () => {
    if (date.day === '') return setError({ ...error, day: "This field is required" })
    if (date.month === '') return setError({ ...error, month: "This field is required" })
    if (date.year === '') return setError({ ...error, year: "This field is required" })
    const currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currantMonth = 1 + currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    const typedDay = +date.day
    const typedMonth = +date.month
    const typedYear = +date.year
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (typedDay > currentDay) {
      currentDay = currentDay + month[currantMonth - 1];
      currantMonth = currantMonth - 1;
    }
    if (typedMonth > currantMonth) {
      currantMonth = currantMonth + 12;
      currentYear = currentYear - 1;
    }
    if (typedDay > 31 || typedDay < 0) return setError({ ...error, day: "Must be a valid day" })
    if (typedDay > month[typedMonth + 1]) return setError({ ...error, day: "Must be a valid date" })
    if (typedMonth > 12 || typedMonth < 0) return setError({ ...error, month: "Must be a valid month" })
    if (typedYear < 0) return setError({ ...error, year: "Must be a valid year" })
    if (typedYear > currentYear) return setError({ ...error, year: 'Must be in the past' })
    if (error.day === '' && error.month === '' && error.year === '') {
      setButton(true)
      setAgeState({
        day: currentDay - typedDay,
        month: currantMonth - typedMonth,
        year: currentYear - typedYear
      })
      setDate(initialFields)
    }
  }

  return (
    <div className='bg-bg w-screen h-screen  flex items-center justify-center'>
      <div className='lg:w-843 h-560 sm:w-92vw rounded-tr-large rounded-l-large rounded-br-full bg-white '>
        <div className='lg:ml-14 lg:mt-15 sm:mt-14 sm:mb-8 flex flex-row sm:items-center sm:justify-center'>
          <div className=' flex flex-row '>
            <div className="lg:mr-7.5 ">
              <label className={`block lg:text-xs sm:text-sm font-extrabold ${!error.day ? 'text-neutral-500' : 'text-red-500'} uppercase tracking-widest`}>
                day
              </label>
              <div className="lg:mt-2 sm:mt-1">
                <div className={`flex rounded-md shadow-sm ring-1 ring-inset ${!error.day ? 'ring-gray-300' : 'ring-red-500'} hover:ring-violet sm:max-w-md font-extrabold lg:text-3xl sm:text-xl`}>
                  <input
                    onFocus={() => setError({ ...error, day: "" })}
                    type="number"
                    id="day"
                    className="lg:w-160 sm:w-24 lg:h-72 sm:h-14 block flex-1 select-none border-0 bg-transparent outline-violet placeholder:text-neutral-500 py-1.5 lg:pl-6 sm:pl-4"
                    placeholder='DD'
                    onChange={(event) => handleDate(event.target.value, 'day')}
                    value={(date.day) ? date.day : ''}
                  />
                </div>
              </div>
              <div className={`lg:mt-2 sm:mt-1 italic text-red-500 sm:text-base sm:w-24 absolute ${error.day ? 'block' : 'hidden'}`}>{error.day}</div>
            </div>
            <div className="lg:mr-7.5 sm:mx-4">
              <label className={`block lg:text-xs sm:text-sm font-extrabold ${!error.month ? 'text-neutral-500' : 'text-red-500'}  uppercase tracking-widest`}>
                month
              </label>
              <div className="lg:mt-2 sm:mt-1">
                <div className={`flex rounded-md shadow-sm ring-1 ring-inset ${!error.month ? 'ring-gray-300' : 'ring-red-500'} hover:ring-violet focus:outline-none active:ring-violet sm:max-w-md font-extrabold lg:text-3xl sm:text-xl`}>
                  <input
                    onFocus={() => setError({ ...error, month: "" })}
                    type="number"
                    id="month"
                    className="lg:w-160 sm:w-24 lg:h-72 sm:h-14 block flex-1 select-none border-0 bg-transparent outline-violet placeholder:text-neutral-500 py-1.5 lg:pl-6 sm:pl-4"
                    placeholder='MM'
                    onChange={(event) => handleDate(event.target.value, 'month')}
                    value={(date.month) ? date.month : ''}
                  />
                </div>
              </div>
              <div className={`lg:mt-2 sm:mt-1 italic text-red-500 sm:text-base absolute ${error.month ? 'block' : 'hidden'}`}>{error.month}</div>
            </div>
            <div>
              <label className={`block lg:text-xs sm:text-sm font-extrabold ${!error.year ? 'text-neutral-500' : 'text-red-500'} uppercase tracking-widest`}>
                year
              </label>
              <div className="lg:mt-2 sm:mt-1">
                <div className={`flex rounded-md shadow-sm ring-1 ring-inset ${!error.year ? 'ring-gray-300' : 'ring-red-500'} sm:max-w-md font-extrabold lg:text-3xl sm:text-xl`}>
                  <input
                    onFocus={() => setError({ ...error, year: "" })}
                    type="number"
                    id="year"
                    className="lg:w-160 sm:w-24 lg:h-72 sm:h-14 block flex-1 select-none border-0 bg-transparent outline-violet placeholder:text-neutral-500 py-1.5 lg:pl-6 sm:pl-4"
                    placeholder='YYYY'
                    onChange={(event) => handleDate(event.target.value, 'year')}
                    value={(date.year) ? date.year : ''}
                  />
                </div>
              </div>
              <div className={`lg:mt-2 sm:mt-1 italic text-red-500 sm:text-base absolute ${error.year ? 'block' : 'hidden'}`}>{error.year}</div>
            </div>
          </div>
        </div>
        <div className="relative flex lg:mx-14 sm:mx-12 lg:mb-20 items-center lg:justify-end">
          <div className="flex-grow border-t border-gray-900/10"></div>
          <button className='flex items-center justify-center h-24 w-24 bg-violet hover:bg-black rounded-full sm:hidden' onClick={() => calculateDate()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="#864cff" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
          </button>
          <button className='flex items-center justify-center h-16 w-16 bg-violet hover:bg-black rounded-full lg:hidden' onClick={() => calculateDate()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 46 44"><g fill="#864cff" stroke="#FFF" strokeWidth="4"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
          </button>
          <div className="flex-grow border-t border-gray-900/10 lg:hidden"></div>
        </div>
        <span className='ml-14 italic font-extrabold text-neutral-950 flex flex-col lg:leading-[6rem] absolute lg:top-45% sm:top-47%'>
          <span className='flex flex-row'>
            {!button ?
              <p className='text-violet sm:text-5xl lg:text-9xl'>--</p>
              :
              <p className='text-violet sm:text-5xl lg:text-9xl'>{ageState.year}</p>}
            <p className='sm:text-5xl lg:text-9xl'>&nbsp;years</p>
          </span>
          <span className='flex flex-row '>
            {!button ?
              <p className='text-violet sm:text-5xl lg:text-9xl'>--</p>
              :
              <p className='text-violet sm:text-5xl lg:text-9xl'>{ageState.month}</p>}
            <p className='sm:text-5xl lg:text-9xl'>&nbsp;months</p>
          </span>
          <span className='flex flex-row'>
            {!button ?
              <p className='text-violet sm:text-5xl lg:text-9xl'>--</p>
              :
              <p className='text-violet sm:text-5xl lg:text-9xl'>{ageState.day}</p>}
            <p className='sm:text-5xl lg:text-9xl'>&nbsp;days</p>
          </span>
        </span>
      </div>
    </div >
  )
}