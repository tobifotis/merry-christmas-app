import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const [gift, setGift] = useState(1);

    function addGift() {
        setGift((prevGift) => prevGift + 1);
    }
    function removeGift() {
        if (gift > 0) {
            setGift((prevGift) => prevGift - 1);
        }
    }

    return (
        <>
        </>
    );
}

export default App;
