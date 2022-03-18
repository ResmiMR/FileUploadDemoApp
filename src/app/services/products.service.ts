import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions ={};
  constructor(private http:HttpClient) { 
    
    }
  

  addProduct(obj:any):Observable<object>{
   
     return this.http.post("http://localhost:3000/items",obj);
  }


  
  updateProduct(obj:any):Observable<object>{
   
    return this.http.put("http://localhost:3000/items",obj);
 }


  removeProduct(obj:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      }
    return this.http.delete("http://localhost:3000/items/remove/"+obj,this.httpOptions);
 }

  public getProducts():Observable<object>{
    return this.http.get("http://localhost:3000/items");
  }


}