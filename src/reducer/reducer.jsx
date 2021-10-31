const Reducer = (state, {type}) => {
    switch (type) {
        case 'START_TIMER':
            return {
                ...state,
                isCounting: true
            };

        case 'STOP_TIMER':
            return {
                ...state,
                isCounting: false
            };

        case 'RESET_TIMER':
            return {
                ...state,
                count: 0,
                isCounting: false
            };

        case 'SET_COUNT':
            return {
                ...state,
                count: state.count + 1
            };

        default:
            return state;
    }
};

export default Reducer;