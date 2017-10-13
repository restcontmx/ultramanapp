import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompetitionService {

    // Constructor function
    // @param http: http_service
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all
    // Get all competitions
    // @params none
    // @returns Observable response
    getAll() : Observable<Response> {
        return this.http_service.get( '/api/competition' )
    }

    // Add new compettition
    // @params data : a competition
    // @returns Observable response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/competition', data )
    }

    // Update object
    // @params data : a competition
    // @returns Observable response
    update( data ) : Observable<Response> {
        return this.http_service.put( `/api/competition/${data.id}`, data )
    }

    // find by id competition
    // @params id : number
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( `/api/competition/${id}` )
    }

    // delete by id competition
    // @params id : number
    // @returns Observable response
    delete( id ) : Observable<Response> {
        return this.http_service.delete( `/api/competition/${id}` )
    }
    
    // Start ttmes and update 
    // @param data : competition
    // @return observable response
    startTimesUpdate( data ) : Observable<Response> {
        return this.http_service.put( '/api/competition/starttimes/', data )
    }
}