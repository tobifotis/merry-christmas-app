import { useState } from 'react';

import GiftIcon from './GiftIcon';
import Controls from './Controls';
import Title from './Title';
import Message from './Message';

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

    const gifts = Array.from({ length: count });

    return (
        <>
            <div className="container">
                <div className="main-title">
                    <Title />
                </div>

                <div className="controls">
                    <Controls
                        onIncrement={incrementCount}
                        onDecrement={decrementCount}
                        isDecrementDisabled={count === 0}
                    />
                </div>

                <div className="sub-title">
                    <h2>Ho ho ho</h2>
                </div>

                <div className="message">
                    <Message count={count} />
                </div>

                <div className="gifts">
                    {gifts.map((_, index) => (
                        <GiftIcon key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SantaCounter;
