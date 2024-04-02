<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <headercomponent />
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-3">
        <!-- <navcomponent /> -->
      </div>

      <div class="col-12">
        <bodycomponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <footercomponent />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12">
        <button class="btn btn-primary">Add</button>
      </div>
    </div> -->
  </div>
  <!-- end of container-->
</template>

<script>
import headercomponent from "./components/headercomponent.vue";
import footercomponent from "./components/footercomponent.vue";
import navcomponent from "./components/navcomponent.vue";
import bodycomponent from "./components/bodycomponent.vue";
// import homecomponent from './components/homecomponent.vue'

export default {
  components: {
    headercomponent,
    footercomponent,
    navcomponent,
    bodycomponent,
    // homecomponent
  },
};
</script>

<style></style>
