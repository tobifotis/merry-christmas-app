import { useState  } from "react";
function SantaCounter() {
    const [count, setCount] = useState(1);

    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }
    function decrementCount() {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    }

    let message = '';
    let message2 = '';
    switch (count) {
        case 0:
            message = 'You get nothing from Santa';
            message2 = 'You were on the naughty list';
            break;
        case 1:
            message = 'You get A present from Santa';
            message2 = 'You were good this year';
            break;
        default:
            message = `You get ${count} presents from Santa`;
            message2 = 'You were good this year';
            break;
    }

    const gifts = Array.from({length: count})

    return (
        <>
            <h1>Merry Christmas</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
           
            <h2>Ho ho ho</h2>
            <h4>{message}</h4>
            <p>{message2}</p>

            <div>{gifts.map((_, index)=> (
                <span key={index}>🎁</span>
            ))}</div>
        </>
    );
}

export default SantaCounter;
