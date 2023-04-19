import React from 'react';


function Category({ category, handleChange, checkedCategory, id }) {
  return (
    <ul key={category.id} className="category">
      <li>
        <input
          type="checkbox"
          id={id}
          name={category.name}
          value={category.id}
          disabled={checkedCategory}
          checked={!!checkedCategory}
          onChange={(e)=> handleChange(e.target.checked)}
        />
        {category.name}
      </li>
    </ul>
  );
}

export default Category;
