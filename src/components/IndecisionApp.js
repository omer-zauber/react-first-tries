import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {    
    state = {
        options: [],
        selectedOption: undefined
    }
 
    handleDeleteOptions = () => {
        this.setState(()=>({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option=>option!=optionToRemove)
        }))
    }
    handlePick = () => {
        const randomOptionIndex = Math.floor(Math.random()*this.state.options.length);
        //alert(this.state.options[randomOptionIndex]);
        this.setState(() => ({selectedOption:this.state.options[randomOptionIndex]}));
    }
    handleAddOption= (option) => {
        if (!option) return 'Enter a valid value to add an item.';
        else if (this.state.options.indexOf(option) >-1) return 'this option already exists.';

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    handleOptionModalClose = () => this.setState(() => ({selectedOption:undefined}));

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) this.setState(() => ({ options }));
        } catch (e) { }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleOptionModalClose={this.handleOptionModalClose}
                />
            </div>
        );}
}
IndecisionApp.defaultProps= {
    options:[]
}