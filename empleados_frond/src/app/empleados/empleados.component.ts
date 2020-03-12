import { Component, OnInit, Inject } from '@angular/core';
import { empleado } from '../entidades/empleado';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
  private accion: any;
  idAccion: string;
  empleado:empleado;
  empleados:any ;
  mensaje:any;
  empleadosTitulo: string[] = ['nombre', 'apellido', 'identificacion', 'fechaNacimiento', 'direccion', 'telefono', 'email', 'eliminar', 'editar'];

  constructor(private route: ActivatedRoute,public dialog: MatDialog,protected serviciosService: ServiciosService ) { }

  ngOnInit( ) {

    this.serviciosService.getEmpleados().subscribe((data) => {   this.empleados = data;  },
      (error) => {console.error(error); }  );
    this.empleado= new empleado();
    this.route.params.subscribe(params => {
    this.idAccion = params['accion']; 
  });}

  eliminar(id:any){
    this.serviciosService.eliminarEmpleado(id).subscribe((data) => { this.mensaje = data;  },
      (error) => {console.error(error); }  );
      
    this.serviciosService.getEmpleados().subscribe((data) => {   this.empleados = data;  },
      (error) => {console.error(error); }  );
  }

  anadir(){
    this.serviciosService.añadirEmpleado(this.empleado).subscribe((data) => { this.mensaje = data;  },
    (error) => {console.error(error); }  );

    this.serviciosService.getEmpleados().subscribe((data) => {   this.empleados = data;  },
    (error) => {console.error(error); }  );
  }

  openDialog(empleado): void {
    const dialogRef = this.dialog.open(empleadoDialog, {
      width: '500px',
      data: {identificacion:empleado.identificacion,nombre:empleado.nombre,apellido:empleado.apellido,fechaNacimiento:empleado.fechaNacimiento,direccion:empleado.direccion,telefono:empleado.telefono,email:empleado.email,empresa:empleado.empresa,id:empleado.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'empleadoDialog',
  templateUrl: 'empleadoDialog.html',
})
export class empleadoDialog {
  empleado:empleado;
  mensaje:any;
  constructor(protected serviciosService: ServiciosService,
    public dialogRef: MatDialogRef<empleadoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: empleado) {    }

  actualizar(empleado): void {
    this.serviciosService.actualizarEmpleado(empleado).subscribe((data) => { this.mensaje = data;  },
    (error) => {console.error(error); }  );
    this.dialogRef.close();
  }
  
  añadi(empleado:empleado){
    this.serviciosService.añadirEmpleado(empleado).subscribe((data) => { this.mensaje = data;  },
    (error) => {console.error(error); }  );
  }
}
