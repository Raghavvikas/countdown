import React, { useEffect, useRef, useState } from 'react';


const Countdown = ()  => {
    const[getDays, setDays] = useState('00');
    const[getHours, setHours] = useState('00');
    const[getMinutes, setMinutes] = useState('00');
    const[getSeconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Jan 29, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = countdownDate - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) /(1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            if(difference < 0){
                clearInterval(interval.current);
            }
            else{
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        },1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
            
        }
    })
    return (
        <div>
            <div className="countdown">
            <h3 className="day">{getDays}</h3>
            <h5>Days</h5>
            <h3 className="hour">{getHours}</h3>
            <h5>Hours</h5>
            <h3 className="minute">{getMinutes}</h3>
            <h5>Minutes</h5>
            <h3 className="second">{getSeconds}</h3>
            <h5>Second</h5>
            </div>
        </div>
    )
}

export default Countdown;
