import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = (onNewCategory) => {

        if (categories.includes(onNewCategory)) return;
        console.log(onNewCategory)
        setCategories([onNewCategory, ...categories]);
        //setCategories([...categories,'One Piece'])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)} />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category} />
            ))
            }

        </>
    )
}