import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Metadata } from '../model/metadata';


@Injectable({
    providedIn: 'root',
})
export class WebApiService {
    ApiUrl = 'http://localhost:3000/';  // URL to web api

    constructor(private http: HttpClient) {
    }

    /** GET heroes from the server */
    public getMetadata() {
        try {
            return this.http.get<Metadata>(this.ApiUrl + 'posts');

        } catch (error) {
            console.log(error);
        }
    }
}
