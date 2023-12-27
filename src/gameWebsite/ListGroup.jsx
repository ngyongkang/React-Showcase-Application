//PascalCasing - Having the first letter of a word to be Capitalised.
//React Standard now a days.
function ListGroup() {
    //JSX: JavaScript XML
    
    let items = [
        'AB',
        'SD',
        'DX',
        'FF',
        'AS'
    ]

    const getMessage = () => {
        // return items.length === 0 ? <p>No item found</p> : null;
        //Shorthand to test true and false conditions
        return items.length === 0 && <p>No item found</p>;
    }

    //Event Handler
    function handleClick(event) {

    }

    return (
        <>
            <h1>List</h1>
            { getMessage() }
            <ul>
                {
                  //Each item in a list needs a key to identify in react.
                  items.map( (item, index) => (
                  <li 
                    // className={"Active class if condition"}
                    key={item}
                    onClick={handleClick}
                  >
                    {item}
                  </li>
                  ))
                }
            </ul>
        </>
    );
}

export default ListGroup;