import React, {useState} from "react";
import Timer from "../timer";
import './app.css';
import './content.css';

const App = () => {
    const [isTimer, setTimer] = useState(false);
    const onToggleTimer = () => {
        setTimer(!isTimer);
    }

    return (
        <div className='app'>
            <h2>Reducer</h2>
            <div className="content">

                <div>
                    <button
                        onClick={onToggleTimer}
                    >
                        Toggle Timer
                    </button>
                    {isTimer && <Timer />}
                </div>
            </div>
        </div>
    );
}

export default App;
