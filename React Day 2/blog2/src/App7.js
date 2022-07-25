import './style.css'
import style from './custom.module.css'
import User2 from './User2'


function App7() {

    const employes = [
        {
            'name': 'Ankit',
            'salary': 12,
            'Address': [
                { 'Home': 'Barabanki', 'State': 'Bihar' },
                { 'Home': 'Bhtinda', 'State': 'Patna' },
                { 'Home': 'Bhodiwala', 'State': 'Dehradun' }
            ]
        },
        {
            name: 'Lav',
            'salary': 15,
            'Address': [
                { 'Home': 'Chandnigo', 'State': 'Raurkela' },
                { 'Home': 'Sikago', 'State': 'USA' },
                { 'Home': 'Gandhigao', 'State': 'GodsePur' }
            ]
        },
        {
            name: 'Shambhu',
            'salary': 19,
            'Address': [
                { 'Home': 'Chandnigo', 'State': 'Raurkela' },
                { 'Home': 'Sikago', 'State': 'USA' },
                { 'Home': 'Gandhigao', 'State': 'GodsePur' }
            ]
        }
    ]



    return (
        <div className="App" style={{ backgroundColor: 'gray' }}>

            <h3>Hello App7</h3>
            {
                employes.map((emp) =>
                    <User2 emp={emp} />
                )
            }

        </div>
    )
}

export default App7;