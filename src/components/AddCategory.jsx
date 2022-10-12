import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState([])

    const handleOnChange = ({target}) => {
        setInputValue (target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        const inputString = inputValue.trim();
        if (inputValue.trim().length <=1) return
        onNewCategory(inputValue.trim());
        // setCategories(categories => [inputValue,...categories])
        setInputValue('');
    };

    return(
        <form onSubmit={onSubmit}>
            <input 
                    type="text" 
                    placeholder="Buscar gifs" 
                    value={inputValue}
                    // onChange = {event => handleOnChange(event)}>        
                    onChange = {handleOnChange}>        
            </input>
        </form>
    )
};