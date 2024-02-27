import React from "react";

function Menu({ handleChange, selected, videoKeys }) {
  return (
    <form>
    {videoKeys.map((value, i)=>(  
      <label htmlFor="">
        <input
          type="radio"
          value={value}
          checked={selected === value}
          onChange={handleChange}
        />
        {value}
      </label>
    ))}
    </form>
  );
}

export default Menu;
