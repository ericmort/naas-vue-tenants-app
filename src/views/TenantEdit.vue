<template>
  <div>
    <h1>Edit Tenant</h1>
    <form v-if="tenant" @submit.prevent="updateTenant">
      <label for="name">Tenant Name:</label>
      <input id="name" v-model="tenant.name" required />
      <button type="submit">Save</button>
    </form>
    <button v-if="tenant" @click="deleteTenant">Delete Tenant</button>
    <router-link to="/tenants">Back to Tenants List</router-link>
  </div>
</template>

<script>
import api from '@/api';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tenant: null
    };
  },
  async created() {
    try {
      const response = await api.getTenant(this.id);
      this.tenant = response.data;
    } catch (error) {
      console.error('Error fetching tenant:', error);
    }
  },
  methods: {
    async updateTenant() {
      try {
        await api.updateTenant(this.tenant);
        this.$router.push({ name: 'TenantList' });
      } catch (error) {
        console.error('Error updating tenant:', error);
      }
    },
    async deleteTenant() {
      try {
        await api.deleteTenant(this.id);
        this.$router.push({ name: 'TenantList' });
      } catch (error) {
        console.error('Error deleting tenant:', error);
      }
    }
  }
};
</script>
