<script setup>

  const employees = [
    {
      employeeId: 1,
      name: 'John',
      age: 18,
      gender: 'male',
      adharNumber: "1234 6547 8790",
      city: "New York",
      salary: 23000,
      department: "Engineering",
      designation: "Developer",
      joiningDate: "2024-12-12"
    },
    {
      employeeId: 1,
      name: 'Martin',
      age: 18,
      gender: 'male',
      adharNumber: "1234 6547 8790",
      city: "New York",
      salary: 23000,
      department: "Engineering",
      designation: "Manager",
      joiningDate: "2024-12-12"
    },
    {
      employeeId: 1,
      name: 'Ken',
      age: 18,
      gender: 'male',
      adharNumber: "1234 6547 8790",
      city: "New York",
      salary: 23000,
      department: "Engineering",
      designation: "Senior Developer",
      joiningDate: "2024-12-12"
    }
  ]


  function deleteEmployee(employeeId) {
    // TODO: employee is removing from the employees but not updating on UI
    employees.splice(employees.indexOf(employeeId), 1)
    console.log(employees);
    alert('Employee deleted successfully.')
  }

</script>

<template>


  <nav>
    <ul>
      <li class="f-20"><strong>All Employee</strong></li>
    </ul>

  </nav>

  <table>
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Adhar No</th>
      <th scope="col">City</th>
      <th scope="col">Salary</th>
      <th scope="col">Depatment</th>
      <th scope="col">Designation</th>
      <th scope="col">Joining Date</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="employee in employees">
      <th scope="row">{{ employee.employeeId }}</th>
      <td>{{ employee.name }}</td>
      <td>{{ employee.age }}</td>
      <td>{{ employee.gender }}</td>
      <td>{{ employee.adharNumber }}</td>
      <td>{{ employee.city }}</td>
      <td>{{ employee.salary }}</td>
      <td>{{ employee.department }}</td>
      <td>{{ employee.designation }}</td>
      <td>{{ employee.joiningDate }}</td>
      <td>
         <i style="color: rgba(178,194,27,0.6); margin-right: 5px; cursor: pointer" class="fa fa-pencil-square" aria-hidden="true"></i>
        <i style="color: red;cursor: pointer" @click="deleteEmployee" class="fa fa-trash" aria-hidden="true"></i>

      </td>
    </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>