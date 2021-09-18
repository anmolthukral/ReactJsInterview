import React,{useContext, useState} from "react";
import PropTypes from "react-proptypes";
import { EmployeeContext } from "../Context";
import Alert from "../Alert";
export const EmployeeAdd=(props)=>{
    const {setEmployee,employee}=useContext(EmployeeContext);
   const [employeeDetails, setEmployeeDetails]=useState({});
    const [showPop, setShow]=useState(false);
   const updateField=(e)=>{
       const tempEmployee={};
       tempEmployee[e.target.id]=e.target.value;
       setEmployeeDetails(Object.assign(employeeDetails,tempEmployee));
   }
    const redirect=(e)=>{
        e.preventDefault();
        setShow(false);
props.history.push("/");
    }
   const addEmployee=(e)=>{
       e.preventDefault()
    setEmployee([...employee,employeeDetails]);
    setShow(true)
   }    
   
  return (<>
  <div>
{showPop&&  <Alert click={redirect} message={'Employee added'}/>  }

<form >
    <label htmlFor='firstName'>First Name</label>
    <input type="text" name='firstName' id='firstName' onChange={updateField} />
    <label htmlFor='lastName'>Last Name</label>
    <input type="text" name='lastName' id='lastName' onChange={updateField} />
    <label htmlFor='dob'>Date of Birth</label>
    <input type="text" name='dob' id='dob' onChange={updateField}/>
    <label htmlFor='designation'>Designation</label>
    <input type="text" name='designation' id='designation' onChange={updateField}/>
    <label htmlFor='worksAt'>Works at</label>
    <input type="text" name='worksAt' id='worksAt' onChange={updateField}/>
    <label htmlFor='profile'>Profile Picture</label>
    <input type="file" name='profile' id='profile' onChange={updateField}/>
    <input type="submit" value="+ Add" onClick={addEmployee} />
</form>

  </div>
  </>)
}
EmployeeAdd.propTypes={
    setEmployee:PropTypes.func,
    employees:PropTypes.array,
}

export default EmployeeAdd;