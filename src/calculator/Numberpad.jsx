function Numberpad(props) {
     
    const {string, setString} = props;
    const numbers = [1,2,3,4,5,6,7,8,9,'-','+','x','/']
  return (
    <>
      <div className="flex flex-wrap border border-slate-200 w-fit">
        {
            numbers.map((number,index) => {
            return (
            <div key={index} className="flex items-center">
                <button className="w-12 text-center border border-black" onClick={() => string == "" ? setString(`${number}`) : setString(`${string} ${number}`)}>
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
