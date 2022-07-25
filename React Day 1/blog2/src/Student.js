function Student(props) {
    return (
        <div>
            <h3>Student component of batch <i>{props.name}</i></h3>
            <h4>{props.email}</h4> <br></br>
        </div>
    )
}

export default Student;