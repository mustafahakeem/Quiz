import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  get(keyName:string){
    const value = localStorage.getItem(keyName);
    return JSON.parse(value);

  }
  set(keyName:string, value:any){
    const stringVal = JSON.stringify(value);
    localStorage.setItem(keyName, stringVal);
  }
}
