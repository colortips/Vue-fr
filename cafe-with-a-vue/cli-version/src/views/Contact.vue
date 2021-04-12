<template>
  <div class="contact">
    <h2>Contactez nous</h2>
    <p>Adresse : {{ address }}</p>
    <p>Téléphone : {{ phone }}</p>
    <p>Email : {{ email }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 06:00 à 16:00</li>
      <li>Samedi: 07:00 à 14:00</li>
      <li>Dimanche: 07:00 à 12:00</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "App",
  computed:{
    ...mapState(['address', 'phone', 'email'])
  }
};
</script>