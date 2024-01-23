import axios from 'axios'

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments'

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);

export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId, department);

export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);
import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
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
                            <td>
                                <button className='btn btn-outline-info btn-sm' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-outline-danger btn-sm' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <button className='btn btn-outline-primary btn-sm' onClick={addNewEmployee}>Add Employee</button>
    </div>
  )
}

export default ListEmployeeComponent