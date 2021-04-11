<template>
  <footer class="footer">
    <p>{{ copyright }}</p>
  </footer>
</template>
<script>
export default {
  name: "App",
  data(){
      return{
          restaurantName: "La belle vue",
      }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
};
</script>