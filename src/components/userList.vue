<template>
  <div>
    <table class="user-table">
      <thead>
        <tr>
          <th>USER ID</th>
          <th>USER NAME</th>
          <th>USER EMAIL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user_id">
          <td>{{ user.user_id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="prevPage" :disabled="currentPage === 1">
        Previous Page
      </button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage * limit >= count">
        Next Page
      </button>
    </div>
  </div>
</template>
<script>

import * as userService from '../services/user.service';

export default {
  name: "userList",
  data() {
    return {
      users: [],
      currentPage:1,
      limit:20,
      count:null
    };
  },
  methods: {
    async fetchUser(){
      const offset= (this.currentPage-1)*this.limit
      const response= await userService.fetchUsers(offset,this.limit);
      console.log((response));
      this.users=response.list
      this.count=response.count
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.fetchUser();
      }
    },
    nextPage() {
      this.currentPage += 1;
      this.fetchUser();
    }
  },
  mounted(){
    this.fetchUser();
  }
};
</script>
<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.user-table th {
  background-color: #f2f2f2;
}

.user-table tbody tr:hover {
  background-color: #f5f5f5;
}

.user-table button {
  margin: 10px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}

.user-table span {
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
