package com.pradeek.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pradeek.patient.models.Patient;

public interface PatientRepo extends JpaRepository<Patient,Integer> {

}
