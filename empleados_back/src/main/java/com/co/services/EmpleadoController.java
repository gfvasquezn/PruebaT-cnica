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

import com.co.model.Contrato;
import com.co.model.Empleado;
import com.co.repositories.ContratoRepository;
import com.co.repositories.EmpleadoRepository;
@RestController
public class EmpleadoController {
	
	@Autowired
	private EmpleadoRepository empleadoRepository;
	@Autowired
	private ContratoRepository contratoRepository;
	
	
	@RequestMapping("/getAllEmployees")
	public Iterable<Empleado> getAllUsers () {
		Iterable<Empleado> findAll = empleadoRepository.findAll();
		return findAll;
	}
	
	@RequestMapping(value="/addEmployee", method = RequestMethod.PUT)
    public String añadirUsuario(@RequestBody Empleado empleado) {
		empleadoRepository.save(empleado);
    	return"Usuario Insertado";
    }

	@RequestMapping ("/getEmployeeById")
	public Empleado getUserById (@RequestParam long userId) {
		return empleadoRepository.findById(userId);	
	}
	
	@RequestMapping(value="/removeEmployee")
    public String eliminarUsuario(@RequestParam String idEmployee) {
		Iterable<Contrato> contratos = contratoRepository.findByEmpleado(empleadoRepository.findById(Long.parseLong(idEmployee)));
		contratoRepository.deleteAll(contratos);
		empleadoRepository.deleteById(Long.parseLong(idEmployee));
		
    	return"Usuario Insertado";
    }

	@RequestMapping (value="/updateEmployee", method = RequestMethod.PUT)
	public Empleado getUserById (@RequestBody Empleado empleado) {
		return empleadoRepository.save(empleado);	
	}
	
	
}
