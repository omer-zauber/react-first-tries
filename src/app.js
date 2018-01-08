//node.js, yarn@1.3.2-g, live-server@1.2.0-g, babel-cli@6.24.1 -g

//yarn install

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//3.21

class Header extends React.Component {
    render () {
        return (
            <div className = "Header">
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
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

class Options extends React.Component {
    render() {
        return (
            <div id="options">
                <p id="somthing">these are options</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div id="addOption">
                <button>Add Option</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header /> 
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));






