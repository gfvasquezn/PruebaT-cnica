import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contratista } from '../entidades/contratista';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiciosService } from '../servicios.service';
var ContratistasComponent = /** @class */ (function () {
    function ContratistasComponent(route, dialog, serviciosService) {
        this.route = route;
        this.dialog = dialog;
        this.serviciosService = serviciosService;
        this.contratistasTitulo = ['nombre', 'apellido', 'identificacion', 'fechaNacimiento', 'direccion', 'telefono', 'email', 'eliminar', 'editar', 'asociar'];
    }
    ContratistasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviciosService.getEmpleados().subscribe(function (data) { _this.empleados = data; }, function (error) { console.error(error); });
        this.serviciosService.getContratistas().subscribe(function (data) { _this.contratistas = data; }, function (error) { console.error(error); });
        this.contratista = new contratista();
        this.route.params.subscribe(function (params) { _this.idAccion = params['accion']; });
    };
    ContratistasComponent.prototype.openDialog = function (contratista) {
        var dialogRef = this.dialog.open(Contratistadialog, {
            width: '500px',
            data: { identificacion: contratista.identificacion, nombre: contratista.nombre, apellido: contratista.apellido, fechaNacimiento: contratista.fechaNacimiento, direccion: contratista.direccion, telefono: contratista.telefono, email: contratista.email, empresa: contratista.empresa, id: contratista.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ContratistasComponent.prototype.openDialogAsociar = function (id) {
        var dialogRef = this.dialog.open(ContratistaEmpleadosdialog, {
            width: '500px',
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    ContratistasComponent.prototype.anadir = function () {
        var _this = this;
        this.serviciosService.añadirContratista(this.contratista).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.serviciosService.getContratistas().subscribe(function (data) { _this.contratistas = data; }, function (error) { console.error(error); });
    };
    ContratistasComponent.prototype.eliminar = function (id) {
        var _this = this;
        this.serviciosService.eliminarContratistas(id).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.serviciosService.getContratistas().subscribe(function (data) { _this.contratistas = data; }, function (error) { console.error(error); });
    };
    ContratistasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contratistas',
            templateUrl: './contratistas.component.html',
            styleUrls: ['./contratistas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, MatDialog, ServiciosService])
    ], ContratistasComponent);
    return ContratistasComponent;
}());
export { ContratistasComponent };
var Contratistadialog = /** @class */ (function () {
    function Contratistadialog(serviciosService, dialogRef, data) {
        this.serviciosService = serviciosService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Contratistadialog.prototype.actualizar = function (contratista) {
        var _this = this;
        this.serviciosService.actualizarContratista(contratista).subscribe(function (data) { _this.mensaje = data; }, function (error) { console.error(error); });
        this.dialogRef.close();
    };
    Contratistadialog = tslib_1.__decorate([
        Component({
            selector: 'Contratistadialog',
            templateUrl: 'Contratistadialog.html',
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [ServiciosService,
            MatDialogRef,
            contratista])
    ], Contratistadialog);
    return Contratistadialog;
}());
export { Contratistadialog };
var ContratistaEmpleadosdialog = /** @class */ (function () {
    function ContratistaEmpleadosdialog(serviciosService, dialogRef, data) {
        this.serviciosService = serviciosService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.id = data.id;
        console.log(data.id);
    }
    ContratistaEmpleadosdialog.prototype.ngOnInit = function () {
        var _this = this;
        this.serviciosService.getEmpleados().subscribe(function (data) { _this.empleados = data; }, function (error) { console.error(error); });
    };
    ContratistaEmpleadosdialog.prototype.asociar = function (empladoId) {
        console.log(this.id);
        this.dialogRef.close();
    };
    ContratistaEmpleadosdialog = tslib_1.__decorate([
        Component({
            selector: 'ContratistaEmpleadosdialog',
            templateUrl: 'ContratistaEmpleadosdialog.html',
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [ServiciosService,
            MatDialogRef, Object])
    ], ContratistaEmpleadosdialog);
    return ContratistaEmpleadosdialog;
}());
export { ContratistaEmpleadosdialog };
//# sourceMappingURL=contratistas.component.js.map