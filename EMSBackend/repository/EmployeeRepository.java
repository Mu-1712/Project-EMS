package com.springboor.EMSBackend.repository;

import com.springboor.EMSBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
