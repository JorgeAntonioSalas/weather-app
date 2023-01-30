import React, { useEffect, useState } from 'react'

const DayDates = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='card_days'>
            <p>{date.toLocaleString()}</p>
        </div>
    );
}

export default DayDates