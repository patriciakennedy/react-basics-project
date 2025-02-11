import { useState } from 'react';

function App() {
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

    // 🛠 Step 1: Define the event handler function (before return)
    function handleClick(message) {
        alert(message);
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Counter: {count}</h1>

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

                {/* 🛠 Step 2: Button with event handler passing an argument */}
                <button
                    style={{
                        ...buttonStyle,
                        backgroundColor: 'blue',
                        color: 'white',
                    }}
                    onClick={() => handleClick('Hello from React!')}
                >
                    Click Me
                </button>
            </div>
        </>
    );
}

export default App;
