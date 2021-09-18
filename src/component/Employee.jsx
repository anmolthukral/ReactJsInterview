import React,{useContext} from "react";
import EmployeeList from "./EmployeeList";
import {EmployeeContext} from "../Context";
export const Employee=(props)=>{
    const ctx=useContext(EmployeeContext);

    const redirectAddEmployee=()=>{
       
        props.history.push("/add");
}

    return (
        <><div>
            <h1>List of employees</h1>
        </div>
        <div>
            <button onClick={redirectAddEmployee}>Add Employee</button>
        </div>
        <EmployeeList employees={ctx.employee} set={ctx.setEmployee}/>
</>

)
}

export default Employee;