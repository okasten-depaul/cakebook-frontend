import React, { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function Recipe(props){
    const recipe = props.recipe;

    const changePrivacy = () => {
        //some call to update the recipe
        console.log("I hit this")
    }

    return (
        <div className="rightContainer">
            <h4 className="title">
                {recipe.name}
                {recipe.is_favorite ? <StarFill className="star" color={recipe.is_favorite && 'gold'}/> : <Star className="star"/>}
                
            </h4>
            <div className="sideBySide">
                <div>
                    <p>Prep Time: {recipe.prep_time}</p>
                    <p>Cook Time: {recipe.cook_time}</p>
                </div>
                <Button variant="warning" size="sm" onClick={changePrivacy}>Make {recipe.is_public ? 'Private' : 'Public'}</Button>
            </div>
            
        </div>
    )
}

export default Recipe;