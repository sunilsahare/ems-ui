export const EmployeeModel = {
    validate(employee) {
      const errors = {};

      if (!employee.name || employee.name.trim() === "") {
        errors.name = "Name Should not be empty or null";
      }

      if (!employee.name || employee.name.length < 2 || employee.name.length > 20) {
        errors.name = "Name must be between 3 and 20 characters";
      }

      if (!employee.age || employee.age < 18 || employee.age > 80) {
        errors.age = "Age must be between 18 and 80 years old.";
      }


      if (!employee.city || employee.city.trim() === "") {
        errors.city = "'City' Should not be empty or null";
      }

      if (!employee.city || employee.city.length < 2 || employee.city.length > 30) {
        errors.city = "City must be between 2 and 30 characters";
      }

      // department

      if (!employee.department || employee.department.trim() === "") {
        errors.department = "Department Should not be empty or null";
      }

      if (!employee.department || employee.department.length < 4 || employee.department.length > 20) {
        errors.department = "Department must be between 2 and 30 characters";
      }

      // designation
      if (!employee.designation || employee.designation.trim() === "") {
        errors.designation = "Designation Should not be empty or null";
      }

      if (!employee.designation || employee.designation.length < 4 || employee.designation.length > 20) {
        errors.designation = "Designation must be between 2 and 30 characters";
      }

      if (!employee.salary || employee.salary < 0) {
        errors.salary = "Salary must not be empty or null";
      }

      console.log("validation errors:", errors);

      return errors;
    },
  };
  