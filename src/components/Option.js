import React from 'react';

const Option = props => (
    <li>
        {props.option}
        <button 
            onClick={(event) => {
                props.handleDeleteOption(props.option);
            }}
        >
            Remove
        </button>
    </li>
);

export default Option;