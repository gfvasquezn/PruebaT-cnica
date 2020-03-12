import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratistasComponent, Contratistadialog, ContratistaEmpleadosdialog } from './contratistas/contratistas.component';
import { EmpleadosComponent, empleadoDialog } from './empleados/empleados.component';
import { ReportesComponent } from './reportes/reportes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  { path: 'contratistas/:accion',    component: ContratistasComponent  },
  { path: 'empleados/:accion',    component:EmpleadosComponent  },
  { path: 'reportes/:accion',  component:ReportesComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContratistasComponent,
    EmpleadosComponent,
    ReportesComponent,
    Contratistadialog,
    empleadoDialog,
    ContratistaEmpleadosdialog,
  ],
  exports: [ Contratistadialog, empleadoDialog ,ContratistaEmpleadosdialog],
  entryComponents: [Contratistadialog,empleadoDialog,ContratistaEmpleadosdialog],
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
    MatSelectModule,
    RouterModule.forRoot(appRoutes,    { enableTracing: true }) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
