import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratistasComponent, Contratistadialog, ContratistaEmpleadosdialog } from './contratistas/contratistas.component';
import { EmpleadosComponent, empleadoDialog } from './empleados/empleados.component';
import { ReportesComponent } from './reportes/reportes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
var appRoutes = [
    { path: 'contratistas/:accion', component: ContratistasComponent },
    { path: 'empleados/:accion', component: EmpleadosComponent },
    { path: 'reportes/:accion', component: ReportesComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ContratistasComponent,
                EmpleadosComponent,
                ReportesComponent,
                Contratistadialog,
                empleadoDialog,
                ContratistaEmpleadosdialog,
            ],
            exports: [Contratistadialog, empleadoDialog, ContratistaEmpleadosdialog],
            entryComponents: [Contratistadialog, empleadoDialog, ContratistaEmpleadosdialog],
            imports: [
                FormsModule,
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MatMenuModule,
                MatButtonModule,
                MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatCardModule,
                MatTableModule,
                MatDialogModule,
                MatRadioModule,
                HttpClientModule,
                RouterModule.forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map