import { useParams } from "react-router-dom";

export const Employees = () =>{

  const {employeeName} = useParams();

 return (
    <>
    <h2>Employees</h2> 
    <p>Selected Employee name : {employeeName}</p>   
    </>
  );
}

