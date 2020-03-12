package com.co.services;

import java.util.Date;
import java.util.List;
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
import com.co.model.Empleado;
import com.co.repositories.ContratistaRepository;
import com.co.repositories.ContratoRepository;
import com.co.repositories.EmpleadoRepository;


import com.co.repositories.ContratoRepository;
@RestController
public class ContratoController {
	
	@Autowired
	private ContratoRepository contratoRepository;
	@Autowired
	private ContratistaRepository contratistaRepository;
	@Autowired
	private EmpleadoRepository empleadoRepository;
	
	@RequestMapping("/getAllContracts")
	public Iterable<Contrato> getAllUsers () {
		Iterable<Contrato> findAll = contratoRepository.findAll();

		return findAll;
	}
	
	@RequestMapping(value="/addContract", method = RequestMethod.GET)
    public String añadirContrato(@RequestParam String idContratista, @RequestParam String idEmpleado ) {
		
		Contratista contratista = contratistaRepository.findById(Long.parseLong(idContratista));
		Empleado empleado= empleadoRepository.findById(Long.parseLong(idEmpleado));
		Contrato contratoNuevo= new Contrato();
		contratoNuevo.setIdContratista(contratista);
		contratoNuevo.setNombreObra("Obra nueva");
		contratoNuevo.setFechaInicio(new Date());
		contratoNuevo.setEmpleado(empleado);
		contratoRepository.save(contratoNuevo);
		empleadoRepository.save(empleado);
    	return"Contrato Insertado";
    }

	@RequestMapping ("/getContractById")
	public Contrato getContractById (@RequestParam long contractorId) {
		return contratoRepository.findByIdContrato(contractorId);	
	}
	
	@RequestMapping(value="/removeContract")
    public String eliminarContrato(@RequestBody String contractorId) {
		contratoRepository.deleteById(Long.parseLong(contractorId));
    	return"Contrato Actualizado";
    }

	
}
