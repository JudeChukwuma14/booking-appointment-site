

import React from 'react'
import {departmentsData }from "../mock/departmentdata.js";
import DrCard from './DrCard.jsx';


const DrData = () => {
    return (
        <div className='DRcard-wrapper'>
            {departmentsData.map((item) => (
             <DrCard
             
             key={item.id}
             img={item.image}
             name={item.name}
             spercialized={item.spercialized}
             experience={item.experience}
             description={item.description}
             />
            ))}
        </div>
    )
}

export default DrData
