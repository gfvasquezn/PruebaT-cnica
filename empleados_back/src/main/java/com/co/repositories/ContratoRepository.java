package com.co.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.co.model.Contratista;
import com.co.model.Contrato;
import com.co.model.Empleado;

@Repository
public interface ContratoRepository extends CrudRepository<Contrato, Long> {
	
	public Contrato findByIdContrato(long idContrato);
	public List<Contrato> findByContratista(Contratista Contratista);
	public List<Contrato> findByEmpleado(Empleado empleado);
	
}
