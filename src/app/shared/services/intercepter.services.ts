import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

/**
 * This class is used to delegate all type of HTTP requests from FE to BE.
 * Interceptor features we created this
 * class to intercept all request and responses.
 */
@Injectable()
export class HttpInterceptor {
    protected headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    /**
     * Method for delegating all GET requests.
     * @param {string} url
     * @param {URLSearchParams} params
     * @returns {Observable<any>}
     */
    get(url: string, params?: URLSearchParams): Observable<any> {
        return this._http.get(url, {headers: this.headers, params: params})
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    /**
     * Method for delegating all POST requests.
     * @param {string} url
     * @param data
     * @param {RequestOptionsArgs} args
     * @returns {Observable<any>}
     */
    post(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
        if (args == null) {
            args = {};
        }
        args.headers = this.headers;
        return this._http.post( url, JSON.stringify(data), args)
            .map((res: Response) => res)
            .catch(this.handleError);
    }

    /**
     * Method for delegating all PUT requests.
     * @param {string} url
     * @param data
     * @param {RequestOptionsArgs} args
     * @returns {Observable<any>}
     */
    put(url: string, data: any, args?: RequestOptionsArgs): Observable<any> {
        // this.headers.set('authToken', localStorage.getItem('authToken'));
        if (args == null) {
            args = {};
        }
        args.headers = this.headers;

        return this._http.put(url, JSON.stringify(data), args)
            .map((res: Response) => res)
            .catch(this.handleError);
    }

    /**
     * Method for delegating all DELETE requests.
     * @param {string} url
     * @param {URLSearchParams} params
     * @returns {Observable<any>}
     */
    delete(url: string, params?: URLSearchParams): Observable<any> {
        // this.headers.set('authToken', localStorage.getItem('authToken'));

        return this._http.delete(url, {headers: this.headers, params: params})
            .map((res: Response) => res)
            .catch(this.handleError);
    }

    /**
     * Method for intercepting all error response
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: any) {
        switch (error.status) {
            default : {
                return Observable.throw(error);
            }
        }
    }
}
