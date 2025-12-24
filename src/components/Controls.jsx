/*
 onIncrement ==> function
 onDecrement ==> function
 isDecrementDisabled ==> boolean
*/
const Controls = ({
    onIncrement,
    onDecrement,
    isDecrementDisabled,
    isIncrementDisabled,
}) => {
    const disabledStyle = {
        opacity: 0.4,
        cursor: 'not-allowed',
        filter: 'grayscale(100%)',
        boxShadow: 'none',
        transform: 'none',
    };

    return (
        <>
            <button
                onClick={onDecrement}
                disabled={isDecrementDisabled}
                className="btn"
                style={isDecrementDisabled ? disabledStyle : {}}
            >
                ➖🎁
            </button>

            <button
                onClick={onIncrement}
                disabled={isIncrementDisabled}
                className="btn"
                style={isIncrementDisabled ? disabledStyle : {}}
            >
                ➕🎁
            </button>
        </>
    );
};

export default Controls;
