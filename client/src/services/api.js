import axios from 'axios'

const Api = (base) => {

    const client = axios.create({
        baseURL: base
    })

    const token = localStorage.getItem('token')

    const headers = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }

    const login = (endpoint, email, passwd) => client.post(endpoint, { email, passwd })

    const create = (endpoint, data) => client.post(endpoint, data, headers)

    const get = endpoint => client.get(endpoint, headers)

    const remove = endpoint => client.delete(endpoint, headers)

    const update = (endpoint, data) => client.patch(endpoint, data, headers)

    return {
        // Users
        getUsers: () => get(`/users`),
        getUserById: (id) => get(`/users/${id}`),
        deleteUsers: (id) => remove(`/users/${id}`),
        updateUsers: (id, user) => update(`/users/${id}`, user),

        // Runs
        getRuns: (filter) => get(`/runs${filter}`),
        createRuns: (run) => create(`/runs`, run),
        deleteRuns: (id) => remove(`/runs/${id}`),

        // Profile
        loginProfile: (email, passwd) => login(`/users/login`, email, passwd),
        getProfile: () => get(`/users/me`),
        createProfile: (profile) => create(`/users`, profile),
        updateProfile: (id, profile) => update(`/users/${id}`, profile)
    }
}

export default Api