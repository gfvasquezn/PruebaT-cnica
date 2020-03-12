package com.co.services;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.co.model.Contratista;
import com.co.model.Contrato;
import com.co.repositories.ContratistaRepository;
import com.co.repositories.ContratoRepository;
@RestController
public class ContratistaController {
	
	@Autowired
	private ContratistaRepository contratistaRepository;
	@Autowired
	private ContratoRepository contratoRepository;
	
	
	@RequestMapping("/getAllContractors")
	public Iterable<Contratista> getAllUsers () {
		Iterable<Contratista> findAll = contratistaRepository.findAll();
		return findAll;
	}
	
	@RequestMapping(value="/addContractor", method = RequestMethod.PUT)
    public String añadirContratista(@RequestBody Contratista contratista) {
		contratistaRepository.save(contratista);
    	return"Contratista Insertado";
    }

	@RequestMapping ("/getContractorById")
	public Contratista getContractorById (@RequestParam long contractorId) {
		return contratistaRepository.findById(contractorId);	
	}
	
	@RequestMapping(value="/removeContractor")
    public String eliminarContratista(@RequestParam String contractorId) {
		Iterable<Contrato> contratos = contratoRepository.findByContratista(contratistaRepository.findById(Long.parseLong(contractorId)));
		contratoRepository.deleteAll(contratos);
		contratistaRepository.deleteById(Long.parseLong(contractorId));
    	return"Contratista Eliminado";
    }

	@RequestMapping (value="/updateContractor", method = RequestMethod.PUT)
	public Contratista getUserById (@RequestBody Contratista contratista) {
		return contratistaRepository.save(contratista);	
	}
	
	
}
