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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="contratista")
public class Contratista {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long  id;
	@OneToMany
	@JoinColumn(name="contrato")
	private List<Contrato> contrato;

	private long  identificacion;
	private String nombre;
	private String apellido;
	private String fechaNacimiento;
	private String direccion;
	private String telefono;
	private String email;
	private String empresa;
	
	
	public Contratista() {} 
	
	public Contratista(Contratista contratista) {
		
		this.identificacion=contratista.getIdentificacion();
		this.nombre=contratista.getNombre();
		this.apellido=contratista.getApellido();
		this.empresa=contratista.getEmpresa();
		this.fechaNacimiento=contratista.getFechaNacimiento();
		this.direccion=contratista.getDireccion();
		this.telefono=contratista.getTelefono();
		this.email=contratista.getEmail();
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmpresa() {
		return empresa;
	}
	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}
	public List<Contrato> getContrato() {
		return contrato;
	}

	public void setContrato(List<Contrato> contrato) {
		this.contrato = contrato;
	}
	
}
