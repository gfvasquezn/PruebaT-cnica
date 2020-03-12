package com.co.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="contrato")
public class Contrato {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long idContrato;
	@ManyToOne
	@JoinColumn(name="idContratista")
	private Contratista contratista;
	
	@ManyToOne
	@JoinColumn(name = "idEmpleado")
	private Empleado empleado;

	private Date fechaInicio;
	private String NombreObra;
	
	
	public Long getIdContrato() {
		return idContrato;
	}
	public void setIdContrato(Long idContrato) {
		this.idContrato = idContrato;
	}
	public Contratista getIdContratista() {
		return contratista;
	}
	public void setIdContratista(Contratista idContratista) {
		this.contratista = idContratista;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public String getNombreObra() {
		return NombreObra;
	}
	public void setNombreObra(String nombreObra) {
		NombreObra = nombreObra;
	}
	public Contratista getContratista() {
		return contratista;
	}
	public void setContratista(Contratista contratista) {
		this.contratista = contratista;
	}
	public Empleado getEmpleado() {
		return empleado;
	}
	public void setEmpleado(Empleado empleado) {
		this.empleado = empleado;
	}
	
	
}
