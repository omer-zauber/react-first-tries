class BuildIt extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibilty = this.toggleVisibilty.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibilty() {
        this.setState(prevState => ({visibility: !prevState.visibility}));
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibilty}>{
                    this.state.visibility? "Hide details" : "Show details"
                }</button>  
                {this.state.visibility && (
                    <p>Hey. These are some details you can now see!</p>
                )}          
            </div>
        );
    }
}

ReactDOM.render(<BuildIt />, document.getElementById('app'));


//  let visibility=false;

// const toggleVisibilty = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const app = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibilty}>{
//                 visibility? "Hide details" : "Show details"
//             }</button>  
//             {visibility && (
//                 <p>Hey. These are some details you can now see!</p>
//             )}          
//         </div>       
//     );
//     ReactDOM.render(app, document.getElementById('app'));
// };

// render();
