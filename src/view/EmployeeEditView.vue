<script setup>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useEmployeeStore} from "../stores/EmployeeStore.js";
import EmployeeForm from "../components/EmployeeForm.vue";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const employeeStore = useEmployeeStore()
const router = useRouter()

const editingEmployee = ref(null)

const updateEmployee = async () => {
    let employeeToBeUpdated = editingEmployee.value;

    employeeToBeUpdated.address = {
      city: editingEmployee.value.address.city,
      state: "Maharashtra",
      street: "Pennsylvania",
      pinCode: 444108,
    };
    employeeToBeUpdated.city = editingEmployee.value.address.city;
    console.log(employeeToBeUpdated);
    await employeeStore.updateEmployee(employeeToBeUpdated)
    if (!employeeStore.hasError) {
         router.push('/')
    }
}

const cancelEdit = () => {
    router.push('/')
    employeeStore.clearErrors()
}

onMounted(async () => {
  console.table(employeeStore.employees)
  console.log(props.id)
    const employee = employeeStore.employees.find(t => t.employeeId == props.id)
    if (employee) {
        editingEmployee.value = { ...employee }
    } else {
      console.log("todo not found, redirect to list")
        // If todo not found, redirect to list
        await router.push('/view')
    }
})
</script>
<template>
    <section id="employee-edit">
        <h2>Edit Employee</h2>
        <div v-if="employeeStore.error" style="text-align: left" class="alert alert-danger"> {{ employeeStore.error }} </div>
        <div v-if="employeeStore.success"  class="alert alert-success" style="text-align: left;
         margin-left: 20px;"> {{ employeeStore.success }} </div>
        <EmployeeForm v-if="editingEmployee" :loading="employeeStore.loading" v-model:employee="editingEmployee" v-model:validationErrors="employeeStore.validationErrors" form-label="Edit: Employee" submit-label="Update Employee" reset-label="Cancel" @submit="updateEmployee" @reset="cancelEdit" />
    </section>
</template>
<style scoped>
</style>
