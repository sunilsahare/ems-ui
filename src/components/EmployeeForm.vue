<script setup>

</script>

<template>

  <div class="card shadow" style="max-width: 650px; border: 2px solid aliceblue;">

    <label class="add-emp-title">
      Add Employee
    </label>

    <form>
      <fieldset class="grid">
        <input type="text" name="text" placeholder="Name" aria-label="Text">
        <input type="number" name="number" placeholder="Age" aria-label="Number">
      </fieldset>

      <fieldset class="grid">
        <select aria-label="Select Gender">
          <option disabled value="">
            Select your Gender...
          </option>
          <option>Male</option>
          <option selected>Female</option>
          <option>Other</option>
        </select>
        <input type="number" name="number" data-tooltip="Enter Adhar No. like 1234 4356 8907" placeholder="Ex. 1234 4567 7654" aria-label="Number">
      </fieldset>

      <fieldset class="grid">
        <input type="text" name="text" placeholder="City" aria-label="Text">
        <input type="number" name="number" placeholder="Salary" aria-label="Number">
      </fieldset>

      <fieldset class="grid">
        <input type="number" name="number" placeholder="Department" aria-label="Text">
        <input type="number" name="number" placeholder="Designation" aria-label="Text">
      </fieldset>

    <input type="date" name="date" aria-label="JoiningDate">

    <input
        type="submit"
        value="Save"
    />

    </form>


  </div>


</template>

<style scoped>

</style>