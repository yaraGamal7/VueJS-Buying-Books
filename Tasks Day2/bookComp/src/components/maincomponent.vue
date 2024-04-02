<template>
    <div class="container" id="mainwrapper">
       <!----navbar------>
       <div class="d-flex justify-content-between p-2 align-items-baseline " style="background-color:#4d1070; border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem; border:1px; box-shadow: 3px 3px 3px rgb(39, 6, 82),3px 3px 5px lightblue;">
            <div>
            <a id="icon" href="#" @click.prevent="iswishlistvisible=false" style="text-decoration: none; color: rgb(68, 4, 17); margin-left: 1rem;"><i class="fa-solid fa-book"></i></a>
        </div>
        <div class="d-flex align-items-baseline" style="margin-right: 1rem;">
            <p style="font-size:20px" id="itemnavbar" class="px-2 my-2">[{{wishlist.items.length}}]<span  v-if="wishlist.items.length==1">Item </span><span v-else style="font-size:20px">Item </span>with total price [{{gettotalprice()}}]</p>
            <button id="btnwishlist" class="btn px-2" @click="iswishlistvisible=true"><i class="fa-regular fa-heart px-2"></i>WishList</button>
        </div>
    </div>
  
      <!-- Cards -->
      <div class="row mt-1" v-if="iswishlistvisible==false">
        <div v-for="book in books" :key="book.id" class="card justify-content-between" style=" width: 26rem; height 10rem">
          <img :src="book.image" :title="book.auther" class="card-img-top" style="height: 75%;">
          <div class="row mt-2">
            <h3 id="bookname" class="text-center m-auto">{{book.Name}}</h3>
          </div>
          <div class="row mt-2" style="color: #3f0d5c;">
            <div class="col">
              <p>Category:{{book.category}}</p>
            </div>
            <div class="col">
              <p>Author Name:{{book.auther}}</p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <p :class="[book.pages>50?'more':'',book.pages<50?'less':'']">Number of pages: <span>{{book.pages}}</span></p>
            </div>
            <div class="col">
              <p>Price: {{book.price}}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex align-items-center py-1 text-center">
              <p>ISBN:{{book.id}}</p>
              <div>
              <button class="btn text-center m-2" style="width: 200px; border-radius: 10rem; background-color:plum; color: #3f0d5c;" :disabled="book.instore==0" @click="addtolist(book)"><i class="fa-regular fa-heart px-2"></i>add to wishlist</button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
  
      <!-- Wishlist -->
      <div class="row" v-if="iswishlistvisible==true">
        <h2 class="col text-danger text-center my-3 m-auto" v-if="wishlist.items.length==0">
          Sorry your wishlist is empty
        </h2>
        <!-- Wishlist content -->
        <table class="table table-striped mx-auto my-3" width="90" v-if="wishlist.items.length>0" style="border: 3px solid #590D22; border-radius: 10rem;">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in wishlist.items" :key="item.book.id">
              <th>{{item.book.id}}</th>
              <td>{{item.book.Name}}</td>
              <td>{{item.book.category}}</td>
              <td>{{item.book.price}}</td>
              <td><button class="btn btn-danger" @click="removebook(item)">remove</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Total Price</th>
              <th colspan="2">{{gettotalprice()}}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import books from './books'
  export default {
    name: 'maincomponent',
    data() {
      return {
        books: [],
        iswishlistvisible: false,
        wishlist: {
          items: []
        }
      }
    },
    mounted() {
      this.books = books;
    },
    methods: {
      addtolist(book) {
        this.wishlist.items.push({
          book: book,
          quantity: 1
        });
        book.instore--;
      },
      gettotalprice() {
        let totalprice = 0;
        for (let i = 0; i < this.wishlist.items.length; i++) {
          totalprice += this.wishlist.items[i].quantity * this.wishlist.items[i].book.price;
        }
        return totalprice;
      },
      removebook(item) {
        item.quantity--;
        if (item.quantity == 0) {
          this.wishlist.items.splice(this.wishlist.items.findIndex(iitem => iitem.book.id == item.book.id), 1);
        }
        item.book.instore++;
      }
    }
  }
  </script>
  
  <style>

        .card p{
            font-weight: bold;
            text-align: justify;
            
        }
        .card{
            width: 26rem;
            margin:0.3rem;
            margin-right: 1.2rem;
            border: none; 
            box-shadow: 4px 4px 3px rgb(176, 113, 206); 
            background-image: linear-gradient(to bottom,transparent 70%, #e3c1fa);
        }
        .card:hover{
            cursor: pointer;
            background-image: linear-gradient(to bottom,#d1b2fa 60%,transparent);
        }
        .more{
            color:#590D22;
        }
        .less{
            color:#c91894;
        }
        p{
            color: rgb(56, 56, 56);
            font-family: 'Times New Roman', Times, serif;
            font-size:1rem;
            font-weight: bold;
        }
        #bookname{
            
            font-family: "Anta", sans-serif;
            font-weight: bold;
            color: #5c18c9;
        }
        .btn{
            color: rgb(224, 55, 55);
            background-color: #2e1c35;
            /* border:none; */
            border-radius: 10rem;
            box-shadow: 3px 3px 3px #4f0f68;
        }
        #btnwishlist{
            color: white;
            font-weight: bold;
            width: 9rem;
            height:3rem;
            background-color: #792274;

        }
        #btnwishlist:hover{
            background-color: #c06cc0;
        }
        #itemnavbar{
            color: white;
            

        }
        .fa-solid{
            color: white;
            font-size: 1.7rem;
        }

    </style>
  <!-- <img src="E:\ITI 9 MONTHS\Vue\New folder\firstappcomponent\public\images\8.jpg" alt=""> -->