import { useState } from "react";

function BasicForm() {


    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [fruitLike, setFruitLike] = useState("");

    function getFormData(e) {
        console.warn(name, fruitLike, tnc);
        e.preventDefault()
    }

    return (
        <div className='App'>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /> <p></p>

                <select onChange={(e) => setFruitLike(e.target.value)}>
                    <option>Select Option</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Orange</option>
                </select> <p></p>

                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept term & condition</span><p></p>

                <button type='submit'>submit</button>&nbsp;
                <button type='clear'>Clear</button>
            </form>
        </div>
    )
}

export default BasicForm;