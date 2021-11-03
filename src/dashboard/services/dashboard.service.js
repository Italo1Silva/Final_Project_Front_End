import http from '@/core/http-common'

class DashboardService {
    endpoint = '/dashboard'
    getAll(){
        return http.get(this.endpoint);
    }
}
export default new DashboardService();