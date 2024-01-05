import React from 'react'

export const ItemsContext = React.createContext();

export default function ItemsContextProvider({children}) {
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {
    const defaultItems = [];
    for (let i=0;i<4;i++)
      defaultItems.push({id: "id" + Math.random().toString(16).slice(2),name: 'item ' + (i+1), state: false});

    setItems(defaultItems);
 }, []) 

  function handleAddItem(value) {
    if(!value) return

    let temp = [...items];
    temp.push({id: "id" + Math.random().toString(16).slice(2),name: value, state: false});
    setItems(temp);
  }
   
  function handleDeleteItem(id) {
    let temp = items.filter((item) => {
        return item.id !== id;
    });

    setItems(temp);
  }

  function handleToggleItem(id) {
    let temp = items.map((item) => {
        if(item.id === id) return {...item, state: !item.state};
        return item;
    });

    setItems(temp);
  }

  function handleRemoveAllItems() {
    setItems([]);
  }

  function handleCompleteAllItems() {
    let temp = items.map((item) => {
        return {...item, state: true};
    });
    setItems(temp);
  }

  function getCompleteItems() {
    let temp = items.filter((item) => {
        if(item.state) return item
    });

    return temp.length
  }

  function loadDefault() {
    const defaultItems = [];
    for (let i=0;i<4;i++)
      defaultItems.push({id: "id" + Math.random().toString(16).slice(2),name: 'item ' + (i+1), state: false});

    setItems(defaultItems);
  }

  return (
    <ItemsContext.Provider
        value={{
            items,
            handleAddItem,
            handleDeleteItem,
            handleToggleItem,
            handleRemoveAllItems,
            handleCompleteAllItems,
            getCompleteItems,
            loadDefault
        }}
    >
    {children}        
    </ItemsContext.Provider>
  )
}
