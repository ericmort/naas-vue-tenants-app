<template>
  <div>
    <h1>Tenant List</h1>
    <ul>
      <li v-for="tenant in tenants" :key="tenant.id">
        {{ tenant.name }} - <router-link :to="{ name: 'TenantEdit', params: { id: tenant.id } }">Edit</router-link>
      </li>
    </ul>
    <router-link to="/tenants/create">Add Tenant</router-link>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      tenants: []
    };
  },
  async created() {
    try {
      const response = await api.getTenants();
      this.tenants = response.data;
    } catch (error) {
      console.error('Error fetching tenants:', error);
    }
  }
};
</script>
