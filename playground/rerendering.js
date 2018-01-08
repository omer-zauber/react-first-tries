const appRoot = document.getElementById('app');

let count=0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => { 
    count--;
    renderCounterApp();
}
const reset = () => {
    count=0;
    renderCounterApp();
}

const renderCounterApp = () => {
    const template = (
        <div>
            <h1> Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button><br/>
            <button onClick = {reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();