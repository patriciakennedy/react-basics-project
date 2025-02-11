// A better approach is using React Fragments (<>...</>) to avoid unnecessary <div> elements in the DOM:
function Greeting(props) {
    return (
        <>
            <h1>Hello, {props.name}! Welcome to React</h1>
            <h1>Nice meeting you, {props.name}! Welcome to React</h1>
        </>
    );
}

export default Greeting;
