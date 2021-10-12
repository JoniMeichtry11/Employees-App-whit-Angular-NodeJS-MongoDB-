import { Employee } from './../../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployees: Employee = {
    name: "",
    position: "",
    office: "",
    salary: 0
  };

  employees: Employee[];

  URL_API = 'http://Localhost:3000/api/employees';

  constructor(private http: HttpClient){
  }

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

}
