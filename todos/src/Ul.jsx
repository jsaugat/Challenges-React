import React from 'react'
import Li from './Li'

function Ul({data, setData}) {
  const handleCheckboxChange = (item) => { 
    console.log(item)
    // const updatedItem = {...item, checked: !item.checked}
    //...
    setData(prev => (
      prev.map(obj => obj.id === item.id? {...obj, checked: !obj.checked} : obj)
    ))
  }
  const handleDelete = (id) => {
    setData(data.filter((object) => object.id !== id))
  }

  return (
    <ul>
      {
        data.map(object => (
          <Li
            key={object.id}
            object={object}
            name={object.name}
            checked={object.checked}
            onDelete={handleDelete}
            onCheckboxChange={handleCheckboxChange}
          />
        ))
      }
    </ul>
  )
}

export default Ul
