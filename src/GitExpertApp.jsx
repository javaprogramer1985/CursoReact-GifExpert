import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // setCategories(current => [...current, 'Carl']);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    };

  return (
   <>
    <h1>GitExpertApp</h1>
    <AddCategory onNewCategory={ (value) => onAddCategory(value) } />
    {
        categories.map((category) => (        
            <GifGrid key={category} category = {category}/>
        ))
    }
   </>
  )
}
