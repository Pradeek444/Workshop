package com.pradeek.patient.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="patientDetail")
public class Patient {
     @Id
     @GeneratedValue
     private int id;
     private String name;
     private int age;
     private int weight;
     private String address;
     private int mobile;
     
     public Patient() {}
     public Patient(int id,String name,int age,int weight,String address,int mobile) {
    	 this.id=id;
    	 this.name=name;
    	 this.age=age;
    	 this.weight=weight;
    	 this.address=address;
    	 this.weight=weight;
    	 this.mobile=mobile;
    	 
     }
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
     
}
