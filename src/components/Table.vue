<script setup>

  const props = defineProps([
    "employees",
    "loading"
  ]);

  const emit = defineEmits(['editClick', 'removeClick'])

  const editHandler = (id) => {
    emit('editClick', id);
  }
  const deleteHandler = (id) => {
    emit('removeClick', id);
  }


</script>

<template>
  <table class="table table-striped table-bordered">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Adhar No</th>
      <th scope="col">City</th>
      <th scope="col">Salary</th>
      <th scope="col">Department</th>
      <th scope="col">Designation</th>
      <th scope="col">Joining Date</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="employee in employees" :key="employee.employeeId">
      <th scope="row">{{ employee.employeeId }}</th>
      <td>{{ employee.name }}</td>
      <td>{{ employee.age }}</td>
      <td>{{ employee.gender }}</td>
      <td>{{ employee.adharNumber }}</td>
      <td>{{ employee.address?.city }}</td>
      <td>{{ employee.salary }}</td>
      <td>{{ employee.department }}</td>
      <td>{{ employee.designation }}</td>
      <td>{{ employee.joiningDate }}</td>
      <td>
         <i style="color: rgba(178,194,27,0.6); margin-right: 5px; cursor: pointer" class="fa fa-pencil-square" :aria-busy="loading" @click="() => editHandler(employee.employeeId)" aria-hidden="true"></i>
         <i style="color: red;cursor: pointer" class="fa fa-trash" aria-hidden="true" :aria-busy="loading" @click="() => deleteHandler(employee.employeeId)"></i>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>