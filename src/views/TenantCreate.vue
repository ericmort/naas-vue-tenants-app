<template>
  <div>
    <h1>Create Tenant</h1>
    <form @submit.prevent="createTenant">
      <label for="name">Tenant Name:</label>
      <input id="name" v-model="tenant.name" required />
      <button type="submit">Create</button>
    </form>
    <router-link to="/tenants">Back to Tenants List</router-link>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      tenant: {
        name: ''
      }
    };
  },
  methods: {
    async createTenant() {
      try {
        await api.createTenant(this.tenant);
        this.$router.push({ name: 'TenantList' });
      } catch (error) {
        console.error('Error creating tenant:', error);
      }
    }
  }
};
</script>
