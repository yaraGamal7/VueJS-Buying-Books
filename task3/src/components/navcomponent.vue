<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <a href="#" @click.prevent="targetone = 'wrapper'">Home</a></li>
      <li class="list-group-item"><a href="#">About</a></li>
      <li class="list-group-item active"> <a href="#" class="text-light">Contact</a></li>
      <li class="list-group-item"><a href="#" @click.prevent="targetone = 'home'">ITI</a></li>
      <li class="list-group-item"><a href="#">MCIT</a></li>
    </ul>
    <div>
      <component :is="targetone" />
    </div>
  </div>
</template>

<script>
import home from "./homecomponent.vue";
import wrapper from "../wrappercomponent.vue"
export default {
  data: () => ({
    targetone: "wrapper",
  }),
  components: {
    home,
    wrapper
  }
}
</script>

<style></style>
