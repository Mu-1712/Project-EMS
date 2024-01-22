package com.springboor.EMSBackend.service;

import com.springboor.EMSBackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
            EmployeeDto createEmployye(EmployeeDto employeeDto);

            EmployeeDto getEmployeeById(Long employeeId);

            List<EmployeeDto> getAllEmployees();

            EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

            void deleteEmployee(Long employeeId);
}
