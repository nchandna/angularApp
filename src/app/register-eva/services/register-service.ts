import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpInterceptor} from '../../shared/services/intercepter.services';
import {UserRegistration} from '../model/user-registration';
import {RegisterationResponse} from '../model/registeration-response';
import {AddWatchlistResponse} from '../model/add-watchlist-response';
import {ApplicationProperties} from '../../shared/properties/application-properties';
import {RegisterRequest} from '../model/register-request';

/**
 * service to register user and add to watchlist.
 */
@Injectable()
export class RegisterService {

    constructor(private http: Http, private httpHelper: HttpInterceptor, private properties: ApplicationProperties) {
    }
    /** service for register the customer**/
    registerUser(user: RegisterRequest) {
        const url = this.properties.REGISTER_USER_URL;
        const response = this.httpHelper.post(url, user);
        return response;
    }

}
