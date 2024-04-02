<template>
  <div class="container">
    <table class="table striped">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="std in student" :key="std.id">
          <td>{{ std.id }}</td>
          <td>{{ std.name }}</td>
          <td>{{ std.city }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">
            <h4>Total Number of students = {{ student.length }}</h4>
          </th>
        </tr>
      </tfoot>
    </table>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addmodal"
    >
      Add Student
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addmodal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="modalTitle">Sign In</h5> -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="myForm" class="was-validated" >
              <div class="mb-3">
                <label for="idInput" class="form-label">ID</label>
                <input
                  type="number"
                  class="form-control is-invalid"
                  v-model="newStudent.id"
                  name="idInput" 
                  required
                />
                <div class="invalid-feedback">Please enter an ID.</div>
              </div>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control is-invalid"
                  v-model="newStudent.name"
                  name="nameInput" 
                  required
                />
                <div class="invalid-feedback">Please enter a valid name.</div>
              </div>
              <div class="mb-3">
                <div class="mb-3">
                  <label for="cityInput" class="form-label">City</label>
                  <input
                    type="text"
                    class="form-control is-invalid"
                    v-model="newStudent.city"
                    name="cityInput" 
                    required
                  />
                  <div class="invalid-feedback">Please enter a city.</div>
                </div>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Remember me</label
                >
              </div>
              <button type="submit" class="btn btn-primary" :data-bs-dismiss="modal" @click.prevent="addStudent">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import student from "../student"; // Import your student data if needed

export default {
  data() {
    return {
      student: student,
      newStudent: {
        id: null,
        name: '',
        city: ''
      }
    };
  },
  methods: {
    addStudent() {
      if (this.newStudent.id && this.newStudent.name && this.newStudent.city) {
        this.student.push({
          id: this.newStudent.id,
          name: this.newStudent.name,
          city: this.newStudent.city
        });
      } 
      
    },
  }
  };
</script>

