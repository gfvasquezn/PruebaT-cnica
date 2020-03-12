import { Component, OnInit } from '@angular/core';
import { contrato } from '../entidades/contrato';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  contratos:any;
  contratosTitulo: string[] = ['nombreContratista','nombreEmpleado','nombreObra', 'fechaInicio','horasTrabajadas', 'horasFaltantes'];

  constructor(private serviciosService:ServiciosService) { 
  }

  ngOnInit() {
    this.serviciosService.obtenerReportes().subscribe((data) => {   this.contratos = data;  },
    (error) => {console.error(error); }  );
  }

}
