package com.springboor.EMSBackend.controller;

import com.springboor.EMSBackend.dto.DepartmentDto;
import com.springboor.EMSBackend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    //Build Add Department API
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto){
       DepartmentDto department = departmentService.createDepartment(departmentDto);
        return  new ResponseEntity<>(department, HttpStatus.CREATED);
    }

    //Build Get Department API
    @GetMapping("{id}")
    public  ResponseEntity<DepartmentDto>getDepartmentById(@PathVariable("id") Long departmentId){
        DepartmentDto departmentDto = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(departmentDto);
    }

    //Build GetAll Department API
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
        List<DepartmentDto> departments = departmentService.getAllDepartments();
        return  ResponseEntity.ok(departments);
    }

    //Build Update Department API
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto>updateDepartment(@PathVariable("id") Long departmentId,
                                                         @RequestBody DepartmentDto updateDepartment){
        DepartmentDto departmentDto = departmentService.updateDepartment(departmentId, updateDepartment);
        return ResponseEntity.ok(departmentDto);
    }

    //Build Update Department API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long departmentId) {
        departmentService.deletDepartment(departmentId);
        return ResponseEntity.ok("Succesfully deleted Department");

    }
}
