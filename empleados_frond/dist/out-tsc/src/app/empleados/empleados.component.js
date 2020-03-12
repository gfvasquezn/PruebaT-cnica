import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { empleado } from '../entidades/empleado';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';
var EmpleadosComponent = /** @class */ (function () {
    function EmpleadosComponent(route, dialog, serviciosService) {
        this.route = route;
        this.dialog = dialog;
        this.serviciosService = serviciosService;
        this.empleadosTitulo = ['nombre', 'apellido', 'identificacion', 'fechaNacimiento', 'direccion', 'telefono', 'email', 'eliminar', 'editar'];
    }
    EmpleadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviciosService.getEmpleados().subscribe(function (data) { _this.empleados = data; }, function (error) { console.error(error); });
        this.empleado = new empleado();
        this.route.params.subscribe(function (params) {
            _this.idAccion = params['accion'];
        });
    };
    EmpleadosComponent.prototype.eliminar = function (id) {
        var _this = this;
        this.serviciosService.eliminarEmpleado(id).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.serviciosService.getEmpleados().subscribe(function (data) { _this.empleados = data; }, function (error) { console.error(error); });
    };
    EmpleadosComponent.prototype.anadir = function () {
        var _this = this;
        this.serviciosService.añadirEmpleado(this.empleado).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.serviciosService.getEmpleados().subscribe(function (data) { _this.empleados = data; }, function (error) { console.error(error); });
    };
    EmpleadosComponent.prototype.openDialog = function (empleado) {
        var dialogRef = this.dialog.open(empleadoDialog, {
            width: '500px',
            data: { identificacion: empleado.identificacion, nombre: empleado.nombre, apellido: empleado.apellido, fechaNacimiento: empleado.fechaNacimiento, direccion: empleado.direccion, telefono: empleado.telefono, email: empleado.email, empresa: empleado.empresa, id: empleado.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    EmpleadosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-empleados',
            templateUrl: './empleados.component.html',
            styleUrls: ['./empleados.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, MatDialog, ServiciosService])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());
export { EmpleadosComponent };
var empleadoDialog = /** @class */ (function () {
    function empleadoDialog(serviciosService, dialogRef, data) {
        this.serviciosService = serviciosService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    empleadoDialog.prototype.actualizar = function (empleado) {
        var _this = this;
        this.serviciosService.actualizarEmpleado(empleado).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.dialogRef.close();
    };
    empleadoDialog.prototype.añadi = function (empleado) {
        var _this = this;
        this.serviciosService.añadirEmpleado(empleado).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
    };
    empleadoDialog = tslib_1.__decorate([
        Component({
            selector: 'empleadoDialog',
            templateUrl: 'empleadoDialog.html',
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [ServiciosService,
            MatDialogRef,
            empleado])
    ], empleadoDialog);
    return empleadoDialog;
}());
export { empleadoDialog };
//# sourceMappingURL=empleados.component.js.map