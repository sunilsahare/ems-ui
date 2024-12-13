<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core';
import {useEmployeeStore} from "../stores/EmployeeStore.js";
import Table from "../components/Table.vue";
import Pagination from "./Pagination.vue";
import EmployeeCards from "../components/EmployeeCards.vue";

const employeeStore = useEmployeeStore()
const router = useRouter()

const showCard = useStorage('employee-view-preference', 'table');

const editEmployee = (id) => {
  router.push({ name: 'EmployeeEdit', params: { id } })
}

const deleteEmployee = async (id) => {
  await employeeStore.deleteEmployee(id)
}

onMounted(async () => {
  await employeeStore.fetchEmployees()
})


</script>


<template>
  <section id="employee-list mb-3" style="margin-left: 10px">
    <h2 class="text-align-left p-2" style="text-align: left">Employee List</h2><small>
    <hr>
    <div style="text-align: left; font-size: 20px;" class="mb-2 ms-1">
      View as:
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" v-model="showCard" name="card" id="card" value="card">
        <label class="form-check-label" for="card">Card</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" v-model="showCard" value="table"  name="table" id="table">
        <label class="form-check-label" for="table">Table</label>
      </div>
    </div>

  </small>
      <div class=" p-0 m-0" style="height: 480px; overflow-y: scroll;">
        <div v-if="employeeStore.error" class="alert alert-danger" style="text-align: left"> {{ employeeStore.error }} </div>
        <div v-if="employeeStore.success" class="alert alert-success" style="text-align: left"> {{ employeeStore.success }} </div>
        <EmployeeCards v-if="showCard === 'card'" :loading="employeeStore.loading" :employees="employeeStore.employees" @edit-click="editEmployee" @remove-click="deleteEmployee" />
        <Table v-if="showCard === 'table'" :loading="employeeStore.loading" :employees="employeeStore.employees" @edit-click="editEmployee" @remove-click="deleteEmployee" />
      </div>
    <Pagination/>

  </section>
</template>

<style scoped>

</style>