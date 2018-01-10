import React from 'react';

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

export default Header;