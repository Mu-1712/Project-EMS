import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])//useState hook syntax

   const navigator = useNavigate();
   
   useEffect(() => {
        getAllEmployee();
    }, []);
   
    function getAllEmployee(){

        console.log('Fetching employees...');
        listEmployees()
        .then((response) => {
            console.log('Fetched employees successfully:', response.data);
            setEmployees(response.data);
        })
        .catch((error) => {
            console.error('Error fetching employees:', error);
        });

    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((reponse) => {
            getAllEmployee();

        }).catch((error) => {
            console.error('Error fetching employees:', error);
           
        })

    }
   
    return (
        <div className='container'>
       
            <h2 className='text-center '> List Of Employees</h2>

            <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>

            <table className='table table-striped table-bordered'>
                <thead className='text-center '>
                    <tr>
                        <th> Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button></td>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                             </tr>)
                    }
        
                </tbody>
            </table>
        </div>

    )
}

export default ListEmployeeComponent