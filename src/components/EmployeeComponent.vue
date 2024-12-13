<script setup>
import {ref} from "vue";
import Table from "./Table.vue";
import EmployeeForm from "./EmployeeForm.vue";
import {useEmployeeStore} from "../stores/EmployeeStore.js";

const employeeStore = useEmployeeStore();

const newEmployee = ref({
  employeeId: null,
  name: '',
  age: 0,
  gender: 'MALE',
  adharNumber: "1234 6547 8790",
  city: "Pune",
  salary: 23000,
  department: "Engineering",
  designation: "Developer",
  joiningDate: "2024-12-06"
})

const editingEmployee = ref(null)

const fetchEmployees = async () => {
  await employeeStore.fetchEmployees();
}

const addEmployee = async () => {
  newEmployee.value.gender = "MALE";
  newEmployee.value.employeeId = null;
  console.log("Adding new Employee", newEmployee.value)
  await employeeStore.addEmployee(newEmployee.value);
  if (!employeeStore.hasError) {
    resetForm();
  }
}
const updateEmployee = async () => {
  console.log("updating editingEmployee", editingEmployee.value)
  await employeeStore.addEmployee(editingEmployee.value);
}
const deleteEmployee = async (id) => {
  console.log("deleting employee with id", id)
  await employeeStore.deleteEmployee(id);
}
const resetForm = () => {
  newEmployee.value = {
    employeeId: 0,
    name: '',
    age: 0,
    gender: '',
    adharNumber: "",
    city: "",
    salary: 0,
    department: "",
    designation: "",
    joiningDate: ""
  }
  employeeStore.validationErrors = {}
}
const editEmployee = (id) => {
  console.log("Updating Employee with id", id)
  const employee = employeeStore.find((employee) => employee.employeeId === id)
  if (employee) {
    editingEmployee.value = { ...employee }; // Create a copy
  }
}

const cancelEdit = () => {
  editingEmployee.value = null
  employeeStore.validationErrors = {}
}




fetchEmployees()

</script>

<template>

  <div class="parent">
    <div class="div1">
      <div v-if="employeeStore.error" class="errormessage">{{ employeeStore.error }}</div>
      <div v-if="employeeStore.success" class="success-message">{{ employeeStore.success }}</div>
      <Table :loading="employeeStore.loading" :employees="employeeStore.employees" @edit-click="editEmployee" @remove-click="deleteEmployee" />
    </div>
    <div class="div2">
      <EmployeeForm  v-if="!editingEmployee" :loading="employeeStore.loading" v-model:employee="newEmployee" v-model:validationErrors="employeeStore.validationErrors" form-label="Add: Employee" submit-label="Add Employee" reset-label="Reset" @submit="addEmployee" @reset="resetForm" />
      <EmployeeForm v-else :employeeStore.loading="employeeStore.loading" v-model:employee="editingEmployee" v-model:validationErrors="employeeStore.validationErrors" form-label="Update: Employee" submit-label="Update Todo" reset-label="Cancel" @submit="updateEmployee" @reset="cancelEdit" />
    </div>
  </div>
</template>

<style scoped>
.errormessage {
  color: red;
  padding: 11px;
  border: 1px solid #7c091f;
  border-radius: 5px;
  background: #e66262;
  text-align: left;
}

.success-message {
  color: green;
  padding: 11px;
  border: 1px solid green;
  border-radius: 5px;
  background: #e2fbf0;
  text-align: left;
}


.parent {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 50px;
}


.div2 { grid-area: 1 / 2 / 2 / 3; }
</style>
