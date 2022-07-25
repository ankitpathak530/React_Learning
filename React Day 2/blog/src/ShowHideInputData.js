import { useState } from "react";

function ShowHideInputData() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false)
    let [status, setStatus] = useState(true);

    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value)
        setPrint(false);
    }

    return (
        <div className="App">

            {/* Example 1 */}
            <h2>Get input box value</h2>
            <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print Data</button>
            <h3>{data}</h3>
            {
                print ?
                    <h3> {data} </h3>
                    :
                    null
            }


            <br></br><br></br>
            {/* Example 2 */}

            {
                status ? <h3>I am learner. I can learn anything</h3> : null
            }
            <button onClick={() => setStatus(true)}>Show me</button>
            <button onClick={() => setStatus(false)}>Hide me</button>



            <br></br><br></br>
            {/* Example 3 */}

            {
                status ? <h3>I am son of farmer</h3> : null
            }
            <button onClick={() => setStatus(!status)}>Toggle</button>


        </div>
    );

}

export default ShowHideInputData;