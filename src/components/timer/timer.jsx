import React, {useEffect, useReducer} from "react";
import Reducer from "../../reducer";

const setDefaultValue = () => {
    const userCount = localStorage.getItem('count');
    if (userCount) return +userCount;
    return 0;
};

const Timer = () => {
    const [{isCounting, count}, dispatch] =
        useReducer(Reducer,
        {
                isCount: false,
                count: setDefaultValue(),
            }
        );

    // componentDidUpdate
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    // запускаем setInterval или останавливаем его
    useEffect(() => {
        let timerIdRef = null;
         if (isCounting) {
             timerIdRef = setInterval(() => {
                 dispatch({type: 'SET_COUNT'});
             }, 1000);
         }

        //componentWillUnmount
        return () => {
            timerIdRef && clearInterval(timerIdRef);
            timerIdRef = null;
        };
    }, [isCounting]);


    return(
        <View
            count={count}
            isCounting={isCounting}
            dispatch={dispatch}
        />
    )
};

export default Timer;

const View = ({count, isCounting, dispatch}) => {
    return(
        <div className="timer">
            <h2>React Timer</h2>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={() => dispatch({type: 'START_TIMER'})}>Start</button>
            ) : (
                <button onClick={() => dispatch({type: 'STOP_TIMER'})}>Stop</button>
            )}
            <button onClick={() => dispatch({type: 'RESET_TIMER'})}>Reset</button>
        </div>
    )
};