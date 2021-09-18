import React from "react";
import PropTypes from "react-proptypes";
import image from "../employee.jfif";
export const EmployeeList=({employees,set})=>{
    
    if(employees.length===0){
        return (<div>No Employees data found, please add some</div>)
    }
    return (employees.map((employee,i)=>(<div>
        <div>
            <img src={image} alt="employee profile"/>
        </div>
       <div> {employee.firstName} {employee.lastName}</div>
       <div> {employee.dob} </div>
       <div> {employee.designation} </div>
       <div> {employee.worksAt} </div>
       <button onClick={e=>{
           e.preventDefault();
            set([...employees.splice(i,1)]);
    }}> Delete</button>
    </div>)))
}
EmployeeList.propTypes={
    employees:PropTypes.array,
}

export default EmployeeList;