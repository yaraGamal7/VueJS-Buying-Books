<template>
  <div>
    <addcomponent @onbookadded="addnewbook" />
    <div class="container">
      <table class="table striped">
        <thead>
          <tr>
            <th>id</th>
            <th>pages</th>
            <th>ISBN</th>
            <th>author</th>
            <th>price</th>
            <th>name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="std in student" :key="std.id">
            <td>{{ std.id }}</td>
            <td>{{ std.pages }}</td>
            <td>{{ std.ISBN }}</td>
            <td>{{ std.author }}</td>
            <td>{{ std.price }}</td>
            <td>{{ std.name }}</td>
            <td>
              <button
                class="btn-warning mx-1"
                data-bs-toggle="modal"
                data-bs-target="#updatemodal"
                @click="fillupdateddata(std)"
              >
                update
              </button>
              <button class="btn-danger mx-1" @click="deletebook(std.id)">
                delete
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">
              <h4>Total Number of books = {{ student.length }}</h4>
            </th>
          </tr>
        </tfoot>
      </table>

      <!-- Button trigger modal -->

      <!-- Modal -->
      <div
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="updatemodal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="w-100 text-center">updating...</h5>
            </div>
            <div class="modal-body">
              <input
                type="text"
                class="form-control my-2"
                placeholder="ISBN"
                v-model="bookISBN"
              />
              <input
                type="text"
                class="form-control my-2"
                placeholder="id"
                disabled
                v-model="bookid"
              />
              <input
                type="text"
                class="form-control my-2"
                placeholder="Name"
                v-model="bookname"
              />
              <input
                type="text"
                class="form-control my-2"
                placeholder="Page"
                v-model="bookpage"
              />

              <input
                type="text"
                class="form-control my-2"
                placeholder="Auther"
                v-model="bookauthor"
              />
              <input
                type="text"
                class="form-control my-2"
                placeholder="price"
                v-model="bookprice"
              />
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-success"
                data-bs-dismiss="modal"
                @click="confirmupdate"
              >
                update
              </button>
              <button class="btn btn-danger" data-bs-dismiss="modal">
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import student from "../student";*/ // Import your student data if needed
import addcomponent from "./addcomponent.vue";

export default {
  data() {
    return {
      bookISBN: "",
      bookpage: "",
      bookid: 0,
      bookauthor: "",
      bookprice: "",
      bookname: "",
      student: [],
      // newStudent: {
      //   id: null,
      //   name: "",
      //   city: "",
      // },
    };
  },

  async created() {
    let allbooks = await fetch("http://localhost:5000/books");
    this.student = await allbooks.json();
  },
  methods: {
    async confirmupdate() {
      let updatedobject = {
        ISBN: this.bookISBN,
        id: this.bookid,
        name: this.bookname,
        pages: this.bookpage,
        author: this.bookauthor,
        price: this.bookprice,
      };
      await fetch(`http://localhost:5000/books/${this.bookid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedobject),
      });
      //update UI
      this.student.find((std) => std.id == this.bookid).ISBN = this.bookISBN;
      this.student.find((std) => std.id == this.bookid).author =
        this.bookauthor;
      this.student.find((std) => std.id == this.bookid).name = this.bookname;
      this.student.find((std) => std.id == this.bookid).pages = this.bookpage;
      this.student.find((std) => std.id == this.bookid).price = this.bookprice;
    },
    fillupdateddata(std) {
      (this.bookcategory = std.category),
        (this.bookISBN = std.ISBN),
        (this.bookpage = std.pages),
        (this.bookid = std.id),
        (this.bookprice = std.price),
        (this.bookauthor = std.author),
        (this.bookname = std.name);
    },

    async deletebook(_id) {
      //delete from db
      await fetch(`http://localhost:5000/books/${_id}`, {
        method: "DELETE",
      });
      //DELETE UI
      this.student = this.student.filter((std) => std.id !== _id);
    },
    addStudent() {
      // if (this.newStudent.id && this.newStudent.name && this.newStudent.city) {
      //   this.student.push({
      //     id: this.newStudent.id,
      //     name: this.newStudent.name,
      //     city: this.newStudent.city,
      //   });
      // }
      // else {
      //   alert('Please fill in all fields!');
      // }
    },
    // handleSubmit() {
    //   if (this.newStudent.id && this.newStudent.name && this.newStudent.city) {
    //     this.addStudent();
    //     this.formValid = true; // Set form validation status
    //   } else {
    //     this.formValid = false; // Set form validation status
    //   }
    // },
    async addnewbook(newbook) {
      let newconstructedobj = {
        id: (
          parseInt(this.student[this.student.length - 1].id) + 10
        ).toString(),
        pages: newbook.pages,
        ISBN: newbook.ISBN,
        author: newbook.author,
        price: newbook.price,
        name: newbook.name,
      };
      //insert into database
      await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newconstructedobj),
      });

      //  console.log(newbook);
      this.student.push(newconstructedobj); //update UI
    },
  },

  components: {
    addcomponent,
  },
};
</script>
