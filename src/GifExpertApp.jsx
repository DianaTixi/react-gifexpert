import React, { useState } from "react";
import {AddCategory, GifGrid } from './components'


export const GifExpertApp = () =>{
    const [categories, setCategories ]= useState(['One Punch', 'One Puch2']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //Push --> muta el estado del arreglo
        //categories.push(newCategory);
        setCategories([newCategory, ...categories])
    }
    //

    return (
        <>
            {/*Tutulo  */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory  
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map( category =>(
                    <GifGrid 
                        key ={category}
                        category ={category}
                    />
                    )
                )
            }
            {/*Gif Item */ }

        </>
    )
}