import { Component, OnInit } from '@angular/core';
import { Data } from '../obj/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Service {
constructor(private http: HttpClient) {
}

getData(csvFilePath: string): Observable<String> {
  return this.http.get(csvFilePath, {responseType: 'text'});
}
}
