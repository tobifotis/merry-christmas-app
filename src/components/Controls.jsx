/*
 onIncrement ==> function
 onDecrement ==> function
 isDecrementDisabled ==> boolean
*/
const Controls = ({ onIncrement, onDecrement, isDecrementDisabled }) => {
    return (
        <>
            <button onClick={onDecrement} disabled={isDecrementDisabled}>-</button>
            <button onClick={onIncrement}>+</button>
        </>
    );
};

export default Controls;
