<script setup>
import {computed, ref} from "vue";
import InputWithError from "./InputWithError.vue";

const employee = defineModel('employee')
const validationErrors = defineModel('validationErrors')
const props = defineProps([
  "loading",
  "formLabel",
  "submitLabel",
  "resetLabel",
]);
const emit = defineEmits(['submit', 'reset'])
const today = computed(() => new Date().toISOString().split('T')[0])

const submitHandler = () => {
  emit('submit');
}

const resetHandler = () => {
  emit('reset');
}

</script>

<template>
  <div class="" style="width: 719px;margin-right: auto;margin-left: 18px">

    <form @submit.prevent="submitHandler">
      <h3 class="text-primary p-2 alert alert-info">Add New Employee</h3>
      <hr>
      <div class="row g-3 my-1">
        <div class="col">
          <InputWithError inputId="name" label="Name" v-model:task="employee.name" v-model:error="validationErrors.name" placeholder="Enter Name" />
        </div>
        <div class="col">
          <InputWithError inputId="age" label="Age" v-model:task="employee.age" v-model:error="validationErrors.age" placeholder="Enter Age" />
        </div>
      </div>

      <div class="row g-3  my-1">
        <div class="col">
        <select aria-label="Select Gender" class="form-control">
          <option disabled value="">
            Select your Gender...
          </option>
          <option>Male</option>
          <option selected>Female</option>
          <option>Other</option>
        </select>
        </div>
        <div class="col">
        <InputWithError inputId="adharNumber" label="adharNumber" v-model:task="employee.adharNumber" v-model:error="validationErrors.adharNumber" placeholder="Ex. 1234 4567 7654" />
        </div>
      </div>

      <div class="row g-3 my-1">
        <div class="col">
        <InputWithError inputId="city" label="City" v-model:task="employee.address.city" v-model:error="validationErrors.city" placeholder="Enter city" />
        </div>
        <div class="col">
          <InputWithError inputId="salary" label="Salary" v-model:task="employee.salary" v-model:error="validationErrors.salary" placeholder="Enter salary" />
        </div>
      </div>
      <div class="row g-3 my-1">
        <div class="col">
        <InputWithError inputId="department" label="department" v-model:task="employee.department" v-model:error="validationErrors.department" placeholder="Enter department" />
        </div>
        <div class="col">
          <InputWithError inputId="designation" label="designation" v-model:task="employee.designation" v-model:error="validationErrors.designation" placeholder="Enter designation" />
        </div>
      </div>
      <div class="form-group mt-3">
       <InputWithError inputId="joiningDate" label="joiningDate" v-model:task="employee.joiningDate" v-model:error="validationErrors.joiningDate" type="date" />
      </div>
      <fieldset class="form-group my-2">
        <button type="submit" class="btn btn-primary me-2 px42" :aria-busy="loading" :disabled="loading">{{ submitLabel }}</button>
        <button type="button"  class="btn btn-secondary px-4" @click="resetHandler" :aria-busy="loading" :disabled="loading">{{ resetLabel }}</button>
      </fieldset>

    </form>


  </div>


</template>

<style scoped>

</style>