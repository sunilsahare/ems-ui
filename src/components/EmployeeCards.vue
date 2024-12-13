<template>
  <div v-if="employees && employees.length" class="container" style="display: inline-grid">
        <article v-for="employee in employees" :key="employee.employeeId" class="box" style="max-width: 450px;">
            <header>
                <h3>{{ employee.name }}</h3>
            </header>
            <hr>
            <p><strong>Gender:</strong> {{ employee.gender }}</p>
            <p><strong>Age:</strong> {{ employee.age }}</p>
            <p><strong>Adhar No:</strong> {{ employee.adharNumber }}</p>
            <p><strong>Department:</strong> {{ employee.department }}</p>
            <p><strong>Designation:</strong> {{ employee.designation }}</p>
            <p><strong>Salary:</strong> {{ employee.salary }}</p>
            <p><strong>Joining Date:</strong> {{ employee.joiningDate }}</p>
            <footer>
                <small><strong>Author:</strong> {{ employee.name }}</small>
              <hr>
                <p class="grid">
                    <button :aria-busy="loading" :disabled="loading" class="btn btn-secondary" @click="() => editHandler(employee.employeeId)" aria-label="Edit"> ✏️ </button>
                    <button :aria-busy="loading" :disabled="loading" class="btn btn-danger" @click="() => deleteHandler(employee.employeeId)" aria-label="Delete"> 🗑️ </button>
                </p>
            </footer>
        </article>
    </div>
<!--  <div class="pagination">-->
<!--    <button :disabled="EmployeeService.pagination.page === 0" @click="previousPage()">Previous</button>-->
<!--    <span> Page {{EmployeeService.pagination.page + 1 }} of {{EmployeeService.pagination.totalPages}}</span>-->
<!--    <button class="page-link" :disabled="EmployeeService.pagination.page === EmployeeService.pagination.totalPages-1" @click="nextPage()">Next</button>-->
<!--  </div>-->

</template>
<script setup>
import {ref} from "vue";
import {useEmployeeStore} from "../stores/EmployeeStore.js";
import {EmployeeService} from "../services/EmployeeService.js";

const employeeStore = useEmployeeStore();
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

const nextPage = () => {
  if (currentPage.value < EmployeeService.pagination.totalPages - 1) {
    fetchEmployees(currentPage.value+1);
  }
};

const previousPage = () => {
  if (currentPage.value > 0) {
    fetchEmployees(currentPage.value-1);
  }
};

const sort  = (columnName) => {
  EmployeeService.pagination.sortBy = columnName;
  EmployeeService.pagination.sortDirection = EmployeeService.pagination.sortDirection === 'asc' ? "asc" : "desc";
  fetchEmployees(currentPage.value);
}

const fetchEmployees = async (page) => {
  currentPage.value = page;
  await employeeStore.fetchEmployees(currentPage.value);
};

let currentPage = ref(0);


</script>
<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}

.box {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.icon-button1 {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
}

.icon-button1:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.icon-button1:hover {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50px;
}

.pagination {
  background: blanchedalmond;
  text-align: right;
  padding: 10px ;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}

.box {
  text-align: left !important;
}

</style>