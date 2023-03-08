package com.pradeek.patient.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.pradeek.patient.models.Patient;
import com.pradeek.patient.service.PatientService;

import io.swagger.v3.oas.annotations.Operation;
@CrossOrigin
@RestController
public class PatientController {
   @Autowired
   private PatientService patientservice;
   @Operation(summary="Create a new patient record")
   @PostMapping("/add")
   public String postDetails(@RequestBody Patient p) {
	   patientservice.savedetails(p);
	   return "Patient Details Added";
   }
   @Operation(summary="List the patient records")
   @GetMapping("/get")
   public List<Patient>getPatient(){
	return patientservice.findall();
   }
   @Operation(summary="Update a patient record")
   @PutMapping("/update/{id}")
   public Patient updatePatientById(@PathVariable int id, @RequestBody Patient p) {
       return patientservice.updatepatientById(id, p);
   }
   @Operation(summary="Delete a patient record")
   @DeleteMapping("/delete{id}")
   public String deletedata(@PathVariable int id) {
	   return patientservice.removePatient(id);
   }
 
}