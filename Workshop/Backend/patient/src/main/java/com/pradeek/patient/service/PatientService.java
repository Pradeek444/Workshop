package com.pradeek.patient.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.pradeek.patient.models.Patient;
import com.pradeek.patient.repository.PatientRepo;

@Service
public class PatientService {
	@Autowired
	PatientRepo patientrepo;
public Patient savedetails(Patient p) {
		return patientrepo.save(p);
	}
	public List<Patient> findall(){
		
		return patientrepo.findAll();
	}
public String removePatient(int id) {
		try {
			if(!patientrepo.findById(id).isEmpty())
			{
				patientrepo.deleteById(id);
				return "Patient Details Removed";
			}
			else
				throw new Exception("Error");
		}
		catch(Exception e) {
			e.printStackTrace();
			return "No Patient details found for Id "+id;
		}
	}
	public Patient updatepatientById(int id,Patient p) {
		p.setId(id);
		return patientrepo.saveAndFlush(p);
		
	}

}
