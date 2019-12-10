import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient:HttpClient) {
  }

  getAlbum(id:number):Promise<any> {
    // const url = this.apiUrl + '/'+id;
    const url = `${environment.apiUrl}photos?albumId=${id}`;
    return this.httpClient.get(url).toPromise();
  }
}
