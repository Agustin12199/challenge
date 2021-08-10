import React from 'react';

export const Table = ({data}) => {
    
    const features = data.features || []
    return(
        <table className="table is-hoverable">
             <thead className="has-background-dark">
                <tr>
                    <th className="has-text-light is-size-7">Height</th>
                    <th className="has-text-light is-size-7">Width</th>
                    <th className="has-text-light is-size-7">Deepth</th>
                    <th className="has-text-light is-size-7">Weight</th>
                    <th className="has-text-light is-size-7">Mterial</th>
                    <th className="has-text-light is-size-7">Color</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    {features.map((feature, index) => {
                        return <th className="font-color is-size-7">{feature.value}</th>
                    })}
                </tr>
            </tbody>
        </table>
    )
}