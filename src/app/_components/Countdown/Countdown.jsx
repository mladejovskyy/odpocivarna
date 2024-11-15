import React, { useState, useEffect } from 'react';
import './Countdown.css'

const Countdown = () => {
    // Set the date we're counting down to
    const targetDate = new Date('2025-06-26T09:00:00'); // Target date: June 26, 2024, 9:00 AM

    // Calculate the time left until the target date
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        // If the target date is passed, return 0
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // If the target date is passed
        }

        // Calculate time left
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    // Set the time left until the target date
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    // Update the time left every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000); // Update every second

        return () => clearInterval(timer); // Clean up the timer on component unmount
    }, []);

    return (
        <div className='countdown-container'>
            <div className='box'>
                <div>
                <h3>{timeLeft.days}</h3>
                <p>Dní</p>
                </div>

            </div>
            <div className='box'>
                <div>

                <h3>{timeLeft.hours}</h3>
                <p>Hodin</p>
                </div>
            </div>
            <div className='box'>
                <div>

                <h3>{timeLeft.minutes}</h3>
                <p>Minut</p>
                </div>
            </div>
            <div className='box'>
                <div>

                <h3>{timeLeft.seconds}</h3>
                <p>Sekund</p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
