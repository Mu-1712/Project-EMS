package com.springboor.EMSBackend.repository;

import com.springboor.EMSBackend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {


}
