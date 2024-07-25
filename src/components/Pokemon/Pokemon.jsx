import React from "react";
import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
  return (
    <div className="flex  justify-evenly items-center  flex-col border border-zinc-200 rounded-xl hover:bg-slate-200">
      <Link to={`/pokemon/${id}`}>
        <div className="p-0">{name}</div>
        <div className=" p-4 mx-4  ">
          <img className="max-w-50 max-h-40 " src={image} alt="image" />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
