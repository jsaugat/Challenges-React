import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./App.css";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Ul from "./Ul";

function App() {
  const initialData = []
  const [data, setData] = useState(initialData, true);
  const [newItem, setNewItem] = useState("");
  const [filteredItem, setFilteredItem] = useState("")

  //ADD ITEM FUNCTIONALITY
  const addItem = (e) => {
    e.preventDefault();
    const newId = data.length + 1;
    const newObject = { id: newId, name: newItem, checked: false };
    //...
    setData([...data, newObject]);
    setNewItem("")
  };

  //SEARCH ITEM FUNCTIONALITY
  const searchItem = (e) => {
    setFilteredItem(e.target.value)
    const searchedItems = data.filter(item => item.name.toLowerCase().includes(filteredItem.toLowerCase())); 
    setData(searchedItems)
  }
  console.log(data);

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        addItem={addItem} 
      />
      <SearchItem 
        onSearch={searchItem}
        filteredItem={filteredItem}
        setFilteredItem={setFilteredItem}
      />
      <Ul 
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
