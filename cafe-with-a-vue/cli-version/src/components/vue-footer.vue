<template>
  <footer class="footer">
    <p>{{ copyright }}</p>
  </footer>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "App",
  computed:{
    ...mapGetters(['copyright'])
  }
};
</script>