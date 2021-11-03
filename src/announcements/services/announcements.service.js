import http from '@/core/http-common'
class AnnouncementsService {
    endpoint = '/announcements';
    getAll(){
        return http.get(this.endpoint);
    }

    create(createAnnouncementDto){
        return http.post(this.endpoint, createAnnouncementDto);
    }
}

export default new AnnouncementsService();