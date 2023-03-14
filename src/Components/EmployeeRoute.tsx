import { Route, Routes } from "react-router-dom";
import { EmployeeLayout } from "./EmployeeLayout";
import { Employees } from "./Employees";
import NewEmployee from "./NewEmployee";

export const EmployeeRoute = () => {
  return (
    <>
    <EmployeeLayout />
       <Routes>
          <Route index  element = {<Employees/>}/>
          <Route path = ':employeeName' element = {<Employees/>}/>
          <Route path = 'new' element = {<NewEmployee/>} />
       </Routes>
    </>
  );
}
