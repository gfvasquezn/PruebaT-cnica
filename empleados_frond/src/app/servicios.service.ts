import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empleado } from './entidades/empleado';
import { contratista } from './entidades/contratista';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(protected http: HttpClient) { }

  getEmpleados() {
    return this.http.get('http://localhost:8080/getAllEmployees');
  }
  getContratistas() {
    return this.http.get('http://localhost:8080/getAllContractors');
  }
  eliminarEmpleado(id){
    return this.http.get('http://localhost:8080/removeEmployee?idEmployee='+id);
  }
  eliminarContratistas(id){
    return this.http.get('http://localhost:8080/removeContractor?contractorId='+id);
  }
  añadirEmpleado(empleado:empleado){
    return this.http.put('http://localhost:8080/addEmployee',empleado);
  }
  añadirContratista(contratista:contratista){
    return this.http.put('http://localhost:8080/addContractor',contratista);
  }

  actualizarEmpleado(empleado:empleado){
    return this.http.put('http://localhost:8080/updateEmployee',empleado);
  }
  actualizarContratista(contratista:contratista){
    console.log(contratista.apellido );
    return this.http.put('http://localhost:8080/updateContractor',contratista);
  }
  asociarEmpleado(id:any,idEmpleado:any){
    return this.http.get('http://localhost:8080/addContract?'+'idContratista='+id+'&idEmpleado='+idEmpleado);
  }

  obtenerReportes(){
    return this.http.get('http://localhost:8080/getAllContracts');
  }
  
  
}
