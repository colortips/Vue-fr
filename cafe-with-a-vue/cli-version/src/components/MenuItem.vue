<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }} : {{ calcPrice }} €</h3>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <BaseButton @click="updateShoppingCart()">
          <template v-slot:title> Ajouter au panier </template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "MenuItem",
  props: {
    addToShoppingCart: {
      type: Function,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  // ["addToShoppingCart", "name", "image", "quantity", "inStock", "price"],
  data() {
    return {
      promo: false,
    };
  },
  computed: {
    calcPrice() {
      if (this.promo) return this.price * 0.9;
      else return this.price;
    },
  },
  beforeMount() {
    if (new Date().getDate() % 2 === 0) this.promo = true;
  },
  methods: {
    updateShoppingCart() {
      this.$emit("add-items-to-cart", this.quantity);
    },
  },
  components: {
    BaseButton,
  },
};
</script>
<style lang="scss">
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>