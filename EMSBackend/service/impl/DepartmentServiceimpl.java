package com.springboor.EMSBackend.service.impl;

import com.springboor.EMSBackend.dto.DepartmentDto;
import com.springboor.EMSBackend.entity.Department;
import com.springboor.EMSBackend.exception.ResourceNotFoundException;
import com.springboor.EMSBackend.mapper.DepartmentMapper;
import com.springboor.EMSBackend.repository.DepartmentRepository;
import com.springboor.EMSBackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceimpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {

        Department department = DepartmentMapper.maptoDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.maptoDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department isn't found with given Id: " + departmentId)
        );
        return DepartmentMapper.maptoDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department) -> DepartmentMapper.maptoDepartmentDto(department))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updateDepartment) {
       Department department = departmentRepository.findById(departmentId).orElseThrow(
               () -> new ResourceNotFoundException("Department is not existed with given id: " + departmentId)
       );

       department.setDepartmentName(updateDepartment.getDepartmentName());
       department.setDepartmentDescription(updateDepartment.getDepartmentDescription());

       Department updatedDepartmentObj = departmentRepository.save(department);

       return DepartmentMapper.maptoDepartmentDto(updatedDepartmentObj);
    }

    @Override
    public void deletDepartment(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(
                () -> new ResourceNotFoundException("Department is not existed with given id: " + departmentId)
        );
        departmentRepository.deleteById(departmentId);

    }


}


