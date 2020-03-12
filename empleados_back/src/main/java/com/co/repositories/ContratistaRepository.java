package com.co.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.co.model.Contratista;

@Repository
public interface ContratistaRepository extends CrudRepository<Contratista, Long> {
	
	public Contratista findById(long idContratista);
}
