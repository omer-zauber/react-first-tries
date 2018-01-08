 let visibility=false;

const toggleVisibilty = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibilty}>{
                visibility? "Hide details" : "Show details"
            }</button>  
            {visibility && (
                <p>Hey. These are some details you can now see!</p>
            )}          
        </div>       
    );
    ReactDOM.render(app, document.getElementById('app'));
};

render();
