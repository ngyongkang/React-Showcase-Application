import React from 'react'

export const ItemsContext = React.createContext();

export default function ItemsContextProvider({children}) {
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {
    const defaultItems = [
     {id: new Date().getTime(),name: 'item 1', state: false},
     {id: new Date().getTime(),name: 'item 2', state: false},
     {id: new Date().getTime(),name: 'item 3', state: false},
     {id: new Date().getTime(),name: 'item 4', state: false},
    ]

    setItems(defaultItems);
 }, []) 

  function handleAddItem(object) {
    let temp = [...items];
    temp.push(object);
    setItems(temp);
  }
   
  function handleDeleteItem(id) {
    let temp = items.map((item) => {
        if(item.id === id) return {};
        return item;
    });

    setItems(temp);
  }

  function handleToggleItem(id) {
    let temp = items.map((item) => {
        if(item.id === id) return {...item, packed: !packed};
        return item;
    });

    setItems(temp);
  }

  function handleRemoveAllItems() {
    setItems([]);
  }

  function handleCompleteAllItems() {
    let temp = items.map((item) => {
        return {...item, packed: true};
    });
    setItems(temp);

  }

  return (
    <ItemsContext.Provider
        value={{
            items,
            handleAddItem,
            handleDeleteItem,
            handleToggleItem,
            handleRemoveAllItems,
            handleCompleteAllItems
        }}
    >
    {children}        
    </ItemsContext.Provider>
  )
}
