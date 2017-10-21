import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StartTimeService { 

    // Constructor function
    // @param http: http_service
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all
    // Get all start_times
    // @params none
    // @returns Observable response
    getAll() : Observable<Response> {
        return this.http_service.get( '/api/start_time' )
    }

    // Add new compettition
    // @params data : a start_time
    // @returns Observable response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/start_time', data )
    }

    // Update object
    // @params data : a start_time
    // @returns Observable response
    update( data ) : Observable<Response> {
        return this.http_service.put( `/api/start_time/${data.id}`, data )
    }

    // find by id start_time
    // @params id : number
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( `/api/start_time/${id}` )
    }

    // delete by id start_time
    // @params id : number
    // @returns Observable response
    delete( id ) : Observable<Response> {
        return this.http_service.delete( `/api/start_time/${id}` )
    }
}