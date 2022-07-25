import { useSearchParams } from 'react-router-dom'

function Filter() {

    const [searchedParams, setSearchedParams] = useSearchParams();

    const age = searchedParams.get('age')
    const city = searchedParams.get('city')
    return (
        <div>
            <h2>Filter Page</h2>
            <p>This is Filter page</p>
            <p>Age:{age} </p>
            <p>City:{city}</p>

            <button onClick={() => setSearchedParams({ age: 44, city: 'Bangalore' })}>Update Details</button>
        </div>
    )
}
export default Filter;