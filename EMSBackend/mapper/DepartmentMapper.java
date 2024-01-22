package com.springboor.EMSBackend.mapper;

import com.springboor.EMSBackend.dto.DepartmentDto;
import com.springboor.EMSBackend.entity.Department;

    public class DepartmentMapper {

            //convert department jpa entity into department dto
         public static DepartmentDto maptoDepartmentDto(Department department) {
             return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
             );
         }

            //convert department dto into department entity
        public static Department maptoDepartment(DepartmentDto departmentDto) {
             return new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
            );
        }
    }
