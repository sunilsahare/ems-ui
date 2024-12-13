<script setup>

</script>

<template>

  <div class=" d-flex align-items-center py-4">
  <main class="form-signin m-auto">
    <div class="form-group">
      <label class="h3 app-heading" for="emp">Employee Management System</label>
    </div>
    <form class="" style="width: 400px">
      <h3 class="text-primary mb-3"> Sign Up</h3>

      <div class="form-floating py-1">
        <input type="text" required class="form-control" id="fullName" placeholder="Full Name">
        <label for="fullName">Full Name</label>
      </div>

      <div class="form-floating py-1">
        <input type="number" required class="form-control" id="mobile" placeholder="Mobile No">
        <label for="mobile">Mobile Number</label>
      </div>

      <div class="form-floating py-1">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating py-1" style="margin-top: 10px">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

<!--      <div class="form-check text-start my-3">-->
<!--        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">-->
<!--        <label class="form-check-label" for="flexCheckDefault">-->
<!--          Remember me-->
<!--        </label>-->
<!--      </div>-->
      <button class="btn btn-primary w-100 py-2 mt-2" type="submit">Sign Up</button>
      <RouterLink to="/login" class="btn btn-outline-info w-100 py-2 mt-1"> Sign In </RouterLink>
      <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
    </form>
  </main>
  </div>
</template>

<style scoped>

</style>