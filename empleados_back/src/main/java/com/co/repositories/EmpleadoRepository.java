package com.co.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.co.model.Empleado;

@Repository
public interface EmpleadoRepository extends CrudRepository<Empleado, Long> {
	
	public Empleado findById(long idEmpleado);
}
