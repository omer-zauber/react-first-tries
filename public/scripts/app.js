'use strict';

//node.js, yarn@1.3.2-g, live-server@1.2.0-g, babel@6.24.1 -g

//yarn install

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//3.12 10:20


console.log('App.js is running!');
var appRoot = document.getElementById('app');

var title = {
    main: 'Indecision App!',
    sub: 'This is the sub-title!'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title.main
    ),
    React.createElement(
        'p',
        null,
        title.sub
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item1'
        ),
        React.createElement(
            'li',
            null,
            'item2'
        ),
        React.createElement(
            'li',
            null,
            'item3'
        )
    )
);

var user = {
    name: 'Omer Zauber',
    age: 26,
    location: 'Israel'
};

var getField = function getField(data, field) {
    if (user[field]) return React.createElement(
        'p',
        null,
        field,
        ': ',
        data[field]
    );
};

var template2 = React.createElement(
    'div',
    null,
    getField(user, 'name'),
    getField(user, 'age'),
    getField(user, 'location'),
    getField(user, 'No such field')
);

ReactDOM.render(template2, appRoot);

// ReactDOM.render(template2, appRoot);
