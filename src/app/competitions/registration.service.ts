import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService {

    // Constructor function
    // @param http: http_service
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all
    // Get all registrations
    // @params none
    // @returns Observable response
    getAll() : Observable<Response> {
        return this.http_service.get( '/api/registration' )
    }

    // Get all by competition id
    // @params id : number
    // @returns Observable response
    getAllByCompetitionId( id ) : Observable<Response> {
        return this.http_service.get( `/api/registration/bycompetition/${id}` )
    }

    // Add new registration
    // @params data : a registration
    // @returns Observable response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/registration', data )
    }

    // Update object
    // @params data : a registration
    // @returns Observable response
    update( data ) : Observable<Response> {
        return this.http_service.put( `/api/registration/${data.id}`, data )
    }

    // find by id registration
    // @params id : number
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( `/api/registration/${id}` )
    }

     // delete by id registration
    // @params id : number
    // @returns Observable response
    delete( id ) : Observable<Response> {
        return this.http_service.delete( `/api/registration/${id}` )
    }

    // This will save all the rounds of the registration
    // They are obviously filtered by satage
    // @params data : a registration object
    saveRounds( data ) : Observable<Response> {
        console.log( data )
        return this.http_service.put( '/api/registration/rounds', data )
    }

}