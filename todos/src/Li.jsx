import React from "react";

function Li({ name, checked, object, onCheckboxChange, onDelete }) {
  return (
    <li className="list">
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheckboxChange(object)}
        />
        {/* ... */}
        <span style={object.checked ? { textDecoration: "line-through" } : null }>
          {name}
        </span>
      </div>
      <button onClick={() => onDelete(object.id)}>delete</button>
    </li>
  );
}

export default Li;
