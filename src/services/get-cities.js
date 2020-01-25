import getCitiesResponse from './mock-responses';

export default class GetCitiesService {
    getCities() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(getCitiesResponse);
            }, 1000);
        });
    }
}