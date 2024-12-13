import { defineStore } from 'pinia';
import {EmployeeService} from "../services/EmployeeService.js";
import {EmployeeModel} from "../services/EmployeeModel.js";
export const useEmployeeStore = defineStore('employeeStore', {
    state: () => ({
        employees: [],
        loading: false,
        error: null,
        success: null,
        validationErrors: {},
    }),
    getters: {
        hasError: (state) => state.error || Object.keys(state.validationErrors).length
    },
    actions: {
        async fetchEmployees(page = 0) {
            this.loading = true;
            try {
                this.employees = await EmployeeService.getEmployees();
                this.employees.forEach(employee => employee.city = employee.address.city);
                console.log(this.employees);
            } catch (err) {
                this.error = 'Failed to fetch Employees';
            } finally {
                this.loading = false;
            }
        },
        async addEmployee(newEmployee) {
            const errors = EmployeeModel.validate(newEmployee);
            if (Object.keys(errors).length > 0) {
                this.validationErrors = errors;
                return;
            }

            this.loading = true;
            try {
                console.log("emp: ",newEmployee)
                await EmployeeService.addEmployee(newEmployee);
                this.success = "Employee Successfully Saved";
                this.employees = await EmployeeService.getEmployees()
            } catch (err) {
                this.error = 'Failed to Add Employee';
            } finally {
                this.loading = false;
            }


        },
        async updateEmployee(updatedEmployee) {
            this.loading = true;
            try {
                updatedEmployee = await EmployeeService.updateEmployee(updatedEmployee);
                this.success = "Employee Successfully Updated";
                this.employees = await EmployeeService.getEmployees()
            } catch (err) {
                this.error = 'Failed to update Employee';
            } finally {
                this.loading = false;
            }


        },
        async deleteEmployee(id) {

            this.loading = true;
            try {
                const response = await EmployeeService.deleteEmployee(id);
                console.log(response.data.message);
                this.success = response.data.message;
                this.employees = await EmployeeService.getEmployees()
            } catch (err) {
                console.log(err);
                this.error = err.message;
            } finally {
                this.loading = false;
            }

        },
        async clearErrors() {
            this.validationErrors = {}; // Clear errors
            this.error = null
        },
    },
});
