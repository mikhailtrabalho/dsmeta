package com.devsuperior.dsmeta.config.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.config.repositories.SaleRepository;
import com.devsuperior.dsmeta.entities.Sale;

@Service
public class SaleService {
	
	@Autowired 
	private SaleRepository repository;
	
	public List<Sale> findSales() {
	return	repository.findAll();
	}

}
