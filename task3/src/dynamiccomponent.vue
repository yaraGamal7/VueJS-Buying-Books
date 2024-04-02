<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <a href="#" @click.prevent="targetone = 'home'">Home</a>
      </li>
      <li class="list-group-item"><a href="#" @click.prevent="targetone = 'about'">About</a></li>
      <li class="list-group-item">
        <a href="#followup" @click="targetone = 'contact'">Contact</a>
      </li>
      <li class="list-group-item">
        <a href="#" @click.prevent="targetone = 'wrapper'">ITI</a>
      </li>
      <li class="list-group-item"><a href="#">MCIT</a></li>
    </ul>
    <div>
      <keep-alive>
        <component :is="targetone" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import home from "./components/homecomponent.vue";
import wrapper from "./wrappercomponent.vue";
import about from "./components/aboutcomponent.vue";
import contact from "./components/contactcomponent.vue";




export default {
  data: () => ({
    targetone: "home",
  }),
  components: {
    home,
    wrapper,
    about,
    contact
  },
};
</script>
