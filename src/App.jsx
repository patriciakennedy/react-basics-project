import Greeting from './Greeting';
import { useState } from 'react';

function App() {
    // step1: define the state
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                {/*step2: display state*/}
                <h1>Counter: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </>
    );
}

export default App;
