import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const URI = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = '8a671681d4c816d94f477b82bc75bc43';
const HASH = '5ba9d41459df2e733b18dfad218993bf';
const TS = '1585787923';

@Injectable({providedIn: 'root'})
export class PhotoService{

    constructor(private http: HttpClient) {}
    listCharacters(nameCharacter : string) {
        return this.http
        .get<Photo[]>(URI + '?limit=10&apikey='+ API_KEY +'&hash=' + HASH + '&ts=' + TS);
        }
}