import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {HttpInterceptor} from '../../shared/services/intercepter.services';
import {ApplicationProperties} from '../../shared/properties/application-properties';

/**
 * service to fetch manager data.
 */
@Injectable()
export class ManagerService {

    constructor(private http: Http, private httpHelper: HttpInterceptor, private properties: ApplicationProperties) {
    }
    // get customer-detail-data
    getCustomerDetailData(evaId: number) {
        const params = new URLSearchParams();
        const url = this.properties.CUSTOMER_LIST_URL + '/' + evaId + 'detail';
        // const url = '../../../assets/service-response/manager-customer-detail.json'
        const response =    this.httpHelper.get(url, params);
        return response;
    }

}
