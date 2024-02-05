<template>
  <div>
    <table class="product-table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Seller ID</th>
          <th>Product Created On</th>
          <th>Product Updated On</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.product_id">
          <td>{{ product.product_id }}</td>
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.seller_id }}</td>
          <td>{{ product.created_at}}</td>
          <td>{{ product.updated_at }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <button @click="prevPage" :disabled="currentPage === 1">Previous Page</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="(currentPage*limit)>= count">Next Page</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import * as productService from '../services/product.service'

export default {
  name: 'productList',
  data() {
    return {
      currentPage: 1,
      products: [],
      limit:20,
      count:null
    };
  },
  methods: {
    async fetchProduct() {
      const offset= (this.currentPage-1)*this.limit
      const response= await productService.fetchProducts(offset,this.limit)
      console.log(response.count);
      this.products=response.list
      this.count=response.count
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.fetchProduct();
      }
    },
    nextPage() {
      this.currentPage += 1;
      this.fetchProduct();
    }
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-table th,
.product-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.product-table th {
  background-color: #f2f2f2;
}

.product-table tbody tr:hover {
  background-color: #f5f5f5;
}

.product-table button {
  margin: 10px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}

.product-table span {
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
