import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contratista } from '../entidades/contratista';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiciosService } from '../servicios.service';
import { empleado } from '../entidades/empleado';


@Component({
  selector: 'app-contratistas',
  templateUrl: './contratistas.component.html',
  styleUrls: ['./contratistas.component.css']
})

export class ContratistasComponent implements OnInit {

  private accion: any;
  idAccion: string;
  contratista:contratista;
  contratistas:any;
  empleados:any ;
  mensaje:any;
  contratistasTitulo: string[] = 
  ['nombre', 'apellido', 'identificacion', 'fechaNacimiento', 'direccion', 'telefono', 'email', 'eliminar', 'editar', 'asociar'];
  constructor(private route: ActivatedRoute,public dialog: MatDialog,protected serviciosService: ServiciosService) {}
 
  ngOnInit() {
    
    this.serviciosService.getEmpleados().subscribe((data) => {   this.empleados = data;  },
      (error) => {console.error(error); }  )

    this.serviciosService.getContratistas().subscribe((data) => { this.contratistas = data;  },
      (error) => {console.error(error); }  );


    this.contratista= new contratista();
    this.route.params.subscribe(params => { this.idAccion = params['accion'];  });
  }

  openDialog(contratista): void {
    const dialogRef = this.dialog.open(Contratistadialog, {
      width: '500px',
      data: {identificacion:contratista.identificacion,nombre:contratista.nombre,apellido:contratista.apellido,fechaNacimiento:contratista.fechaNacimiento,direccion:contratista.direccion,telefono:contratista.telefono,email:contratista.email,empresa:contratista.empresa,id:contratista.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAsociar(id:any): void {
    const dialogRef = this.dialog.open(ContratistaEmpleadosdialog, {
      width: '500px',
      data: {id:id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 
  anadir(){
    this.serviciosService.añadirContratista(this.contratista).subscribe((data) => { this.mensaje = data;  },
    (error) => {console.error(error); }  );

    this.serviciosService.getContratistas().subscribe((data) => { this.contratistas = data;  },
    (error) => {console.error(error); }  );
  }

  eliminar(id:any){
    this.serviciosService.eliminarContratistas(id).subscribe((data) => {  this.mensaje= data;  },
      (error) => {console.error(error); }  );
      
    this.serviciosService.getContratistas().subscribe((data) => { this.contratistas = data;  },
    (error) => {console.error(error); }  );
  }
  
}

@Component({
  selector: 'Contratistadialog',
  templateUrl: 'Contratistadialog.html',
})
export class Contratistadialog {
  mensaje:any;
  constructor(protected serviciosService: ServiciosService,
    public dialogRef: MatDialogRef<Contratistadialog>,
    @Inject(MAT_DIALOG_DATA) public data: contratista) {  
   
      }

    actualizar(contratista){
      this.serviciosService.actualizarContratista(contratista).subscribe((data) => { this.mensaje = data;  },
      (error) => {console.error(error); }  );
      this.dialogRef.close();
  
    }
}


@Component({
  selector: 'ContratistaEmpleadosdialog',
  templateUrl: 'ContratistaEmpleadosdialog.html',
})
export class ContratistaEmpleadosdialog implements OnInit {
  id:any
  empleados:any;
  idEmpleado:any;

  ngOnInit() {
    this.serviciosService.getEmpleados().subscribe((data) => {   this.empleados = data;  },
      (error) => {console.error(error); }  )
  }

  constructor(protected serviciosService: ServiciosService,
    public dialogRef: MatDialogRef<Contratistadialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id=data.id;
      console.log(data.id);
     }

  asociar(): void {
    console.log(this.id);
    console.log(this.idEmpleado); 
    this.serviciosService.asociarEmpleado(this.id,this.idEmpleado).subscribe((data) => {   this.empleados = data;  },
    (error) => {console.error(error); }  )
    this.dialogRef.close();
  }

}