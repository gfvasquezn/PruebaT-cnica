import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ServiciosService = /** @class */ (function () {
    function ServiciosService(http) {
        this.http = http;
    }
    ServiciosService.prototype.getEmpleados = function () {
        return this.http.get('http://localhost:8080/getAllEmployees');
    };
    ServiciosService.prototype.getContratistas = function () {
        return this.http.get('http://localhost:8080/getAllContractors');
    };
    ServiciosService.prototype.eliminarEmpleado = function (id) {
        return this.http.get('http://localhost:8080/removeEmployee?idEmployee=' + id);
    };
    ServiciosService.prototype.eliminarContratistas = function (id) {
        return this.http.get('http://localhost:8080/removeContractor?contractorId=' + id);
    };
    ServiciosService.prototype.añadirEmpleado = function (empleado) {
        return this.http.put('http://localhost:8080/addEmployee', empleado);
    };
    ServiciosService.prototype.añadirContratista = function (contratista) {
        return this.http.put('http://localhost:8080/addContractor', contratista);
    };
    ServiciosService.prototype.actualizarEmpleado = function (empleado) {
        return this.http.put('http://localhost:8080/updateEmployee', empleado);
    };
    ServiciosService.prototype.actualizarContratista = function (contratista) {
        console.log(contratista.apellido);
        return this.http.put('http://localhost:8080/updateContractor', contratista);
    };
    ServiciosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ServiciosService);
    return ServiciosService;
}());
export { ServiciosService };
//# sourceMappingURL=servicios.service.js.map