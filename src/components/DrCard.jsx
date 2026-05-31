import React from 'react'

const DrCard = ({ img, name, spercialized, experience, description }) => {
    return (
        <div className="bg-white shadow-[0_3px_8px_rgba(0,0,0,0.8)] mt-3 p-2 sm:p-3 md:p-4 rounded-2xl flex flex-col justify-between min-h-64 w-full sm:w-80 md:w-70 lg:w-75">
            <img src={img} alt="image" className='w-full h-40 sm:h-48 md:h-52 object-fill rounded-lg' />
            <h2 className='text-base sm:text-lg md:text-xl font-semibold text-slate-800 mb-2 mt-2 line-clamp-2'>
                {name}
            </h2>
            <h3 className="text-green-500 font-extrabold font-serif text-base sm:text-lg line-clamp-1">
                {spercialized}
            </h3>
            <h4 className="font-black text-sm sm:text-base"> {experience}</h4>
            <p className="text-xs sm:text-sm font-black line-clamp-3">

                {description}
            </p>

        </div>
    )
}

export default DrCard
