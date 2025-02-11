import Greeting from './Greeting';
import { useState } from 'react';

function App() {
    const handleClick = () => {
        alert('Button Clicked!');
    };

    // step1: define the state
    const [count, setCount] = useState(0);

    // Define button styles
    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
    };

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                {/*step2: display state*/}
                <h1>Counter: {count}</h1>

                {/* Increase Button */}
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: 'green',
                        color: 'white',
                    }}
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                    Increase
                </button>

                {/* Decrease Button */}
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: 'red',
                        color: 'white',
                    }}
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                >
                    Decrease
                </button>

                {/* Reset Button */}
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: 'gray',
                        color: 'white',
                    }}
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>

                {/* Click Event Button */}
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: 'blue',
                        color: 'white',
                    }}
                    onClick={() => alert('Button Clicked!')}
                >
                    Click Me
                </button>
            </div>
        </>
    );
}

export default App;
