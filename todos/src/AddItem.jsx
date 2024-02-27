import React, { useEffect, useRef } from 'react'

function AddItem({newItem, setNewItem, addItem}) {
  const addInputBox = useRef(null)
  useEffect(()=>{
    addInputBox.current.focus()
  },[])

  return (
    <form className='add' onSubmit={addItem}>
      <input 
        ref={addInputBox}
        type="text"
        value={newItem}
        placeholder='add task'
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button
        type="submit"
        // ...
        disabled={!newItem} //make button not work on empty input.
      >
        Add
      </button>
    </form>
  )
}

export default AddItem
