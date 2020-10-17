class ApiRepository {
    BASE_URL = "http://localhost:3001/";
    endpoint = "";

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async callApi(endpoint, options = {}) {
        const url = this.BASE_URL + endpoint;
        options.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }

        const response = await fetch(url, options);
        return await response.json();
    }

    async findAll(){
        return await this.callApi(this.endpoint);
    }

    async findById(id){
        return await this.callApi(this.endpoint + id);
    }

    async create(entity){
        return await this.callApi(this.endpoint, {
            method: 'POST',
            body: JSON.stringify(entity),
        });
    }

    async update(id, updates) {
        return this.callApi(this.endpoint + id, {
            method: 'PUT',
            body: JSON.stringify(updates),
        });
    }

    async remove(id){
        return this.callApi(this.endpoint + id, {
            method: 'DELETE',
        });
    }

}

export default ApiRepository;