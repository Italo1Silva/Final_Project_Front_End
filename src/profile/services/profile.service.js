import http from '@/core/http-common'
class ProfileService {
    endpoint = '/directors';
    getAll(){
        return http.get(this.endpoint);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }
}

export default new ProfileService();