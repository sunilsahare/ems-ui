import { describe, it, expect, vi } from 'vitest';
import {EmployeeModel} from "../../../src/services/EmployeeModel.js";

describe('EmployeeModel.validate', () => {

    let mockEmployee = {
        employeeId: 1,
        name: null,
        age: 18,
        gender: 'MALE',
        adharNumber: "1234 5678 9876",
        address: {
            city: "Pune",
            state: "Maharashtra",
            street: "Pennsylvania",
            pinCode: 444108,
        },
        city: "Pune",
        salary: 23000,
        department: "Engineering",
        designation: "Software Engineer",
        joiningDate: "2024-12-12"
    }

    it('should return an error when Name is missing or invalid', () => {
        let employee = {
            employeeId: 1,
            name: 'Sunil Digambar Sahare Sunil Digambar Sahare',
            age: 18,
            gender: 'MALE',
            adharNumber: "1234 5678 9876",
            address: {
                city: "Pune",
                state: "Maharashtra",
                street: "Pennsylvania",
                pinCode: 444108,
            },
            city: "Pune",
            salary: 23000,
            department: "Engineering",
            designation: "Software Engineer",
            joiningDate: "2024-12-12"
        }
        const errors = EmployeeModel.validate(employee);
        expect(errors.name).toBe("Name must be between 3 and 20 characters");
    });

    it('should return an error when Age is missing or invalid', () => {
        let employee = mockEmployee;
        employee.age = 8;
        let errors = EmployeeModel.validate(employee);
        expect(errors.age).toBe('Age must be between 18 and 80 years old.');

        employee = employee.age = 120;
        errors = EmployeeModel.validate(employee);
        expect(errors.age).toBe('Age must be between 18 and 80 years old.');
    });

    it('should return an error when Department is missing or invalid', () => {
        let employee = mockEmployee;
        employee.department = "Am";
        let errors = EmployeeModel.validate(employee);
        expect(errors.department).toBe('Department must be between 2 and 30 characters');

        employee = employee.department = "Long Department Senior Software Engineer";
        errors = EmployeeModel.validate(employee);
        expect(errors.department).toBe('Department must be between 2 and 30 characters');
    });

    it('should return an error when Designation is missing or invalid', () => {
        let employee = mockEmployee;
        employee.designation = "SE";
        let errors = EmployeeModel.validate(employee);
        expect(errors.designation).toBe('Designation must be between 2 and 30 characters');

        employee = employee.designation = "Long Designaytion Senior Software Engineer";
        errors = EmployeeModel.validate(employee);
        expect(errors.designation).toBe('Designation must be between 2 and 30 characters');
    });

    it('should return an error when Salary is missing', () => {
        let employee = mockEmployee;
        employee.salary = 0;
        let errors = EmployeeModel.validate(employee);
        expect(errors.salary).toBe('Salary must not be empty or null');
    });

    it('should return an error when Age is missing or invalid', () => {
        let employee = mockEmployee;
        employee.age = 10;
        let errors = EmployeeModel.validate(employee);
        expect(errors.age).toBe('Age must be between 18 and 80 years old.');

        employee.age = 100;
        errors = EmployeeModel.validate(employee);
        expect(errors.age).toBe('Age must be between 18 and 80 years old.');
    });


});