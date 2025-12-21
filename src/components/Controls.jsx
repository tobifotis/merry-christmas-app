/*
 onIncrement ==> function
 onDecrement ==> function
 isDecrementDisabled ==> boolean
*/
const Controls = ({ onIncrement, onDecrement, isDecrementDisabled, isIncrementDisabled }) => {
    return (
        <>
            <button
                onClick={onDecrement}
                disabled={isDecrementDisabled}
                className="btn"
            >
                ➖🎁
            </button>
            <button onClick={onIncrement} 
            disabled={isIncrementDisabled}
             className="btn">
                ➕🎁
            </button>
        </>
    );
};

export default Controls;
