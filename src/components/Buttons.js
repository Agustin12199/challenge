import React from 'react';

export default function Buttons ({value, onClick}){
    return (
       <button className="button is-rounded is-link is-inverted is-small p-3 mx-1" onClick ={() => onClick(value)}>{value+1}</button>
    )
}
