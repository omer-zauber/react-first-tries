class IndecisionApp extends React.Component {    
    constructor(props) {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    
    handleDeleteOptions() {
        this.setState(()=>({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option=>option!=optionToRemove)
        }))
    }
    handlePick() {
        const randomOptionIndex = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomOptionIndex]);
    }
    handleAddOption(option) {
        if (!option) return 'Enter a valid value to add an item.';
        else if (this.state.options.indexOf(option) >-1) return 'this option already exists.';

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    // handlePick = pass down to Action and setup onClick - bind here
    //  randomly pick an option
    render() {
        const title = "Indecision App";
        const subtitle = 'Put your life in the hands of a computer';
        return (    
            <div>

                {<Header title = {title} subtitle = {subtitle}/>} 
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleAddOption={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );}
}
IndecisionApp.defaultProps= {
    options:[]
}

const Header = props => {
    return (
        <div className = "Header">
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps ={
    title: 'some default'
}

const Action = props => {
    return (
        <div className = "Action">
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    );
}

const Options = props => {
    return (
        <div id="options">
            <button onClick={props.handleAddOption}>Remove All</button>
            <p id="somthing">you have {props.options.length} options!</p>
            <br />
            <ul>
            {
                props.options.map(option => (
                    <Option 
                        key = {option} 
                        option = {option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                )
            }
            </ul>
        </div>
    );
}

const Option = props => (
    <li>
        {props.option}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.option);
            }}
        >
            Remove
        </button>
    </li>
);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error}));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['item 1','item 2','item 3']}/>, document.getElementById('app'));






