import React from "react";
import { FaRegCalendar, FaRegStar } from "react-icons/fa";

const Card = ({ photos, title, description, nextAvailable, rating }) => {
  return (
    <div className="card bg-gray-100 overflow-hidden rounded-lg shadow-lg flex flex-col">
      <div className="relative w-full overflow-hidden">
        <img
          src={photos}
          alt={title}
          className="w-full h-52 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-95 shadow-md rounded-full px-3 py-2 flex items-center gap-2">
          <FaRegStar className="text-green-500 w-4 h-4" />
          <span className="text-sm font-semibold text-green-500">{rating}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h2 className="title text-xl text-start font-bold text-primary-700 mb-1">
          {title}
        </h2>
        <p className="text text-gray-600 mb-4 text-start">{description}</p>
        <div className="flex justify-start items-center bg-blue-200 py-1 px-2 rounded-lg mt-auto w-max">
          <FaRegCalendar />
          <span className="text-gray-600 ml-2">{nextAvailable}</span>
        </div>
        <button className="text-white bg-primary-700 font-bold mt-4 inline-block hover:bg-gray-300 hover:text-primary-700 rounded-2xl py-2 px-4">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Card;
