//node.js, yarn@1.3.2-g, live-server@1.2.0-g, babel@6.24.1 -g

//yarn install

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//3.12 10:20


console.log('App.js is running!');
const appRoot = document.getElementById('app');

const title = {
    main: 'Indecision App!',
    sub: 'This is the sub-title!'
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{title.main}</h1>
        <p>{title.sub}</p>
        <ol>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
        </ol>
    </div>
);

const user = {
    name: 'Omer Zauber',
    age: 26,
    location: 'Israel'
}



const getField = (data,field) => {
    if (user[field]) return <p>{field}: {data[field]}</p>;
};

const template2 = (
    <div>
        {getField(user,'name')}
        {getField(user,'age')}
        {getField(user,'location')}
        {getField(user,'No such field')}
    </div>
);

ReactDOM.render(template2, appRoot);




// ReactDOM.render(template2, appRoot);


