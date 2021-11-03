import http from '@/core/http-common'
class TeachersService {
    endpoint = '/teachers';
    getAll(){
        return http.get(this.endpoint);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }
}

export default new TeachersService();