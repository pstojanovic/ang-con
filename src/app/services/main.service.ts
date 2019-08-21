import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Person } from "src/classes/interfaces";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor(public http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get(`${environment.homeUrl}/person`) as Observable<
      Person[]
    >;
  }

  addPerson(data: Person): Observable<Person> {
    return this.http.post(`${environment.homeUrl}/person`, data) as Observable<
      Person
    >;
  }

  updatePerson(data: Person): Observable<Person> {
    return this.http.put(`${environment.homeUrl}/person/${data.id}`, data) as Observable<
      Person
    >;
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete(
      `${environment.homeUrl}/person/${id}`
    ) as Observable<Person>;
  }
}
