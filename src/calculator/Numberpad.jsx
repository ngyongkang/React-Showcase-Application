function Numberpad(props) {
     
    const {string, setString} = props;
    const numbers = [1,2,3,4,5,6,7,8,9,'-','+','x','/']
  return (
    <>
      <div className="flex flex-wrap padding">
        {
            numbers.map((number,index) => {
            return (
            <div key={index} className="numberpad-item">
                <button onClick={() => string == "" ? setString(`${number}`) : setString(`${string} ${number}`)}>
                    {number}
                </button>
            </div>
            )
            })
        }
      </div>
    </>
  )
}

export default Numberpad
