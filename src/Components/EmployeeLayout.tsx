import { Link, useSearchParams } from 'react-router-dom';

export const EmployeeLayout = () => {
  const employees = ['Venkatesh','Goutham','Charan']
  const [searchParam , setSearchParam] = useSearchParams({employee : 'Venkatesh'})
  const EmployeeName = searchParam.get("employee");
  return (
    <>
      <h2>Employee Layout</h2>
      {employees.map((employee,index)=> {
        return <div key={`${employee}-${index}`} ><Link to = {`/Employees/${employee}`} >{employee}</Link></div>
      })}
      <Link to = {`/Employees/${EmployeeName}`} >New Employee : {EmployeeName}</Link>
      <br/>
      <input type = 'text' value ={EmployeeName != null ? EmployeeName : ''} onChange={e => {setSearchParam({employee : e.target.value})}}/>
    </>
  );
}
