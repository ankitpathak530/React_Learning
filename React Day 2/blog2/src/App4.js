import './style.css'
import style from './custom.module.css'

function App4() {

    return (
        <div className="App" style={{ backgroundColor: 'gray' }}>

            <h3>Hello App4</h3>
            <p className='primary'>Style type 1 in React js</p>
            <p style={{ backgroundColor: 'green', color: 'white' }}>Style type 2 in React js</p>
            <p className={style.success}>Style type 3 in React js</p>

        </div>
    )
}

export default App4;