import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

function App5() {

    const students = ['Ankit', 'Mnana', "Shiva"];
    const employes = [
        {
            'name': 'Ankit',
            'salary': 12
        },
        {
            name: 'Lav',
            'salary': 15
        }
    ]


    //map looping
    students.map((item) => {
        console.warn("my name is", item);
    })

    //for loop
    for (let i = 0; i < students.length; i++) {
        console.warn(students[i]);
    }


    //In return statement we use map not for loop
    return (
        <div className="App" style={{ backgroundColor: 'white' }}>

            <h3>Hello App5</h3>
            <h4>Added Bootstrap</h4>
            <Button variant="success">Success</Button>{' '}

            {/* We ae not allow to use for loop here */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((name, i) =>
                            <tr key={i}>
                                <td>
                                    Student
                                </td>
                                <td>
                                    {name}
                                </td>
                            </tr>
                        )
                    }
                </tbody >
            </Table >

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employes.map((emp, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{emp.name}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Alert variant="warning">
                This is a  warn alert—check it out!
            </Alert>
        </div >
    )
}

export default App5;