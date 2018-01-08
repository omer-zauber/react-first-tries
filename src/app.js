//node.js, yarn@1.3.2-g, live-server@1.2.0-g, babel-cli@6.24.1 -g

//yarn install

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//3.21

class IndecisionApp extends React.Component {    
    render() {
        const title = "Indecision App";
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['item 1','item 2','item 3'];
        return (    
            <div>
                <Header title = {title} subtitle = {subtitle}/> 
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        );}
}

class Header extends React.Component {
    render () {

        return (
            <div className = "Header">
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div className = "Action">
                <button>What should i do?</button>
            </div>
        );
    }
}

//Setup options prop for Options. render the length

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        //this.props.options = [];
        console.log(this.props.options);
    }
    render() {
        return (
            <div id="options">
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p id="somthing">you have {this.props.options.length} options!</p>
                <br />
                {this.props.options.map(option => <Option key = {option} option = {option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.option}</div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert (option);
            e.target.elements.option.value='';
            this.props.options.push(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));






