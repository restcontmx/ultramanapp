import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompetitionTypeService {

    // Constructor function
    // @param http: http_service
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all
    // Get all competition types
    // @params none
    // @returns http pettition
    getAll() : Observable<Response> {
        return this.http_service.get( '/api/competition_type/' )
    }

}