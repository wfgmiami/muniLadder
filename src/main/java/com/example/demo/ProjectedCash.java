package com.example.demo;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@Entity
@AllArgsConstructor
public class ProjectedCash{
		
	@Id @GeneratedValue 
	private Long id;
	private String cusip;
	private Long price;
	private Long coupon;
	private String maturity;
	private Long ytm;
	private String sector;
	private String rating;
	private String state;
	private String lastTraded;
	private Long ed;
	private Long md;
	private Long ytw;
	
	public ProjectedCash() {}
	
	
}