package com.springboor.EMSBackend.service;

import com.springboor.EMSBackend.dto.DepartmentDto;
import com.springboor.EMSBackend.entity.Department;

import java.util.List;

public interface DepartmentService {

    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long departmentId);

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(Long departmentId, DepartmentDto updateDepartment);

    void deletDepartment(Long departmentId);
}
