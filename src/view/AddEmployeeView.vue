<script setup>


import {useEmployeeStore} from "../stores/EmployeeStore.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import EmployeeForm from "../components/EmployeeForm.vue";

const employeeStore = useEmployeeStore()
const router = useRouter()

const newEmployee = ref({
  employeeId: null,
  name: '',
  age: 0,
  gender: 'MALE',
  adharNumber: "",
  address: {
    city: "Pune",
    state: "Maharashtra",
    street: "Pennsylvania",
    pinCode: 444108,
  },
  city: "",
  salary: 0,
  department: "",
  designation: "",
  joiningDate: ""
})

const addEmployee = async () => {
  newEmployee.value.gender = "MALE";
  newEmployee.value.employeeId = null;
  newEmployee.value.city = newEmployee.value.address.city;
  await employeeStore.addEmployee(newEmployee.value);
  if (!employeeStore.hasError) {
    resetForm();
    await router.push('/')
  }
}

const resetForm = () => {
  newEmployee.value = {
    employeeId: null,
    name: '',
    age: 0,
    gender: '',
    adharNumber: "",
    city: "New York",
    salary: 0,
    department: "",
    designation: "",
    joiningDate: ""
  }
  employeeStore.clearErrors()
}
</script>
<template>
  <section id="employee-add">
    <h2 class="text-align-left p-2" style="text-align: left">Add Employee</h2>
    <hr>
    <div v-if="employeeStore.error" class="alert alert-danger"> {{ employeeStore.error }} </div>
    <div v-if="employeeStore.success" class="alert alert-success" style="text-align: left;
    margin-left: 20px;"> {{ employeeStore.success }} </div>
    <EmployeeForm :loading="employeeStore.loading" v-model:employee="newEmployee" v-model:validationErrors="employeeStore.validationErrors" form-label="Add: Employee" submit-label="Add Employee" reset-label="Reset" @submit="addEmployee" @reset="resetForm" />
  </section>
</template>
<style scoped>

</style>
