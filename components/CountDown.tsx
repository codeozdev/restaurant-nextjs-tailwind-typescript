'use client'
import Countdown from 'react-countdown'

const endingData = new Date('2023-08-25') // YYYY-MM-DD

const CountDown = () => {
  return (
    <Countdown
      date={endingData}
      className='text-yellow-300 font-bold text-5xl'
    />
  )
}
export default CountDown


//yarn add react-countdown