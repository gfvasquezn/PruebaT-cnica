package com.co.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="empleado")
public class Empleado {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long  id;
	private long  identificacion;
	
	@OneToMany
	@JoinColumn(name="empleado")
	private List<Contrato> contrato;
	
	
	private String nombre;
	private String apellido;
	private String tipoContrato;
	private String fechaNacimiento;
	private String direccion;
	private String telefono;
	private String email;

	private int horasTrabajadas;
	private int horasATrabajar;
	
	public Empleado() {}
	
	public Empleado(Empleado empleado) {
		this.identificacion=empleado.getIdentificacion();
		this.nombre=empleado.getNombre();
		this.apellido=empleado.getApellido();
		this.tipoContrato=empleado.getTipoContrato();
		this.fechaNacimiento=empleado.getFechaNacimiento();
		this.direccion=empleado.getDireccion();
		this.telefono=empleado.getTelefono();
		this.email=empleado.getEmail();
	}
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getIdentificacion() {
		return identificacion;
	}
	public void setIdentificacion(long identificacion) {
		this.identificacion = identificacion;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getTelefono() {
		return telefono;
	}
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	public String getTipoContrato() {
		return tipoContrato;
	}
	public void setTipoContrato(String tipoContrato) {
		this.tipoContrato = tipoContrato;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}


	public List<Contrato> getContrato() {
		return contrato;
	}

	public void setContrato(List<Contrato> contrato) {
		this.contrato = contrato;
	}

	public int getHorasTrabajadas() {
		return horasTrabajadas;
	}

	public void setHorasTrabajadas(int horasTrabajadas) {
		this.horasTrabajadas = horasTrabajadas;
	}

	public int getHorasATrabajar() {
		return horasATrabajar;
	}

	public void setHorasATrabajar(int horasATrabajar) {
		this.horasATrabajar = horasATrabajar;
	}
	

}
