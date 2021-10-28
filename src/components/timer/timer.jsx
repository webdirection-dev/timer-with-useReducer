import React, {useState, useEffect, useRef} from "react";

const setDefaultValue = () => {
    const userCount = localStorage.getItem('count');
    if (userCount) return +userCount;
    return 0;
};

const Timer = () => {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCounting] = useState(false);
    const timerIdRef = useRef(null)

    const timerStart = () => {
        setIsCounting(true);
    };

    const timerStop = () => {
        setIsCounting(false);
    };

    const timerReset = () => {
        setCount(0);
        setIsCounting(false);
    };

    // componentDidUpdate
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    // запускаем setInterval или останавливаем его
    useEffect(() => {
         if (isCounting) {
             timerIdRef.current = setInterval(() => {
                 setCount((prevCount) => prevCount + 1);
             }, 1000);
         }

        //componentWillUnmount
        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, [isCounting]);


    return(
        <div className="timer">
            <h2>React Timer</h2>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={timerStart}>Start</button>
            ) : (
                <button onClick={timerStop}>Stop</button>
            )}
            <button onClick={timerReset}>Reset</button>
        </div>
    )
};

export default Timer;