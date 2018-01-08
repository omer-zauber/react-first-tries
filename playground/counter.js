class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne() {
        console.log('add');
    }

    handleMinusOne() {
        console.log('minus');
    }

    handleReset() {
        console.log('reset');
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        )
    }
}

//create 3 methods : handleAddOne, handleMinusOne, handleReset
//use console.log to print method name
//wire+ bind in constructor

ReactDOM.render(<Counter />, document.getElementById('app'));