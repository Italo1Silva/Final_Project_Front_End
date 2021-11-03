import http from '@/core/http-common'
class TopTeachersService {
    endpoint = '/teachers';
    getAll(){
        return http.get(this.endpoint);
    }
}

export default new TopTeachersService();