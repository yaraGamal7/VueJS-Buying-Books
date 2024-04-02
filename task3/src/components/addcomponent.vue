<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addmodal"
    >
      Add BOOK
    </button>
    <div
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      id="addmodal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="w-100 text-center">Add New Book</h5>
          </div>
          <div class="modal-body">
            <!-- <input
              type="text"
              class="form-control my-2"
              placeholder="id"
              v-model="bookid"
            /> -->
            <input
              type="text"
              class="form-control my-2"
              placeholder="ISBN"
              v-model="bookISBN"
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
              @click="raiseevent"
            >
              Add
            </button>
            <button class="btn btn-danger" data-bs-dismiss="modal">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bookcategory: "",
    // bookid: 0,
    bookpage: "",
    bookISBN: "",
    bookauthor: "",
    bookprice: "",
    bookname: "",
  }),
  methods: {
    raiseevent() {
      // alert("ok clicked");
      let createdbook = {
        // id: this.bookid,
        category: this.bookcategory,
        pages: this.bookpage,
        ISBN: this.bookISBN,
        author: this.bookauthor,
        price: this.bookprice,
        name: this.bookname,
      };

      this.$emit("onbookadded", createdbook);
    },
  },
};
</script>

<style></style>
