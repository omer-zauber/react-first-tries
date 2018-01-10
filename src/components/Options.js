import React from 'react';

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

export default Options;