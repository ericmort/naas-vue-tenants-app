import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8082',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getTenants() {
        return apiClient.get('/tenants');
    },
    getTenant(id) {
        return apiClient.get(`/tenants/${id}`);
    },
    createTenant(tenant) {
        return apiClient.post('/tenants', tenant);
    },
    updateTenant(tenant) {
        return apiClient.put(`/tenants/${tenant.id}`, tenant);
    },
    deleteTenant(id) {
        return apiClient.delete(`/tenants/${id}`);
    }
};
