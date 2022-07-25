import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

function App6() {

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




    //In return statement we use map not for loop
    return (
        <div className="App" style={{ backgroundColor: 'white' }}>

            <h3>Hello App6</h3>
            <h4>Added Bootstrap</h4>

            {/* We ae not allow to use for loop here */}

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Salary</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employes.map((emp, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{emp.name}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <thead style={{ backgroundColor: 'gray' }}>
                                        <tr>
                                            <th>Home</th>
                                            <th>State</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            emp.Address.map((e1) =>
                                                <tr >
                                                    <td style={{ textAlign: 'left', padding: '14px' }} >
                                                        {e1.Home}

                                                    </td>
                                                    <td style={{ textAlign: 'left' }}>{e1.State}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table >


        </div >
    )
}

export default App6;