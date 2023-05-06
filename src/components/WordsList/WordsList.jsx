import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function WordsList({words}) {
    return (
        <ul>
            {words.map((word,index) => (
                <li key={word.id}>
                    <Checkbox />
                    { ' '}
                    <span>{index + 1}</span>
                    { ' '}
                    <span>{word.enWord}</span>
                    { ' '}
                    <span>{word.uaWord}</span>
                    { ' '}
                    <button type="button">Delete</button>
                    { ' '}
                    <button type="button">Edit</button>
                </li>
            ))}
        </ul>   
   )
}
