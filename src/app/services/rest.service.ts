import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
     'Authorization': 'Basic ' + btoa(localStorage.getItem('email')+ ':' +localStorage.getItem('token'))
    // 'Authorization': 'Basic ' + btoa('medvedkama@gmail.com'+':'+"0F5BD2A43B49E92EFEF47B174FFC53F7")
  });

  private jsonHeaderLogin = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  });

  private static DEFAULT_PATH = '/rest/';

  public static API: string = 'http://0.0.0.0:8080/';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Вызов веб-сервиса
   * @param methodName - имя метода
   * @param params - параметры
   */
  public doCall(methodName: string, params: any, type: string) {
    //const LOGIN_API: string = 'http://0.0.0.0:8080/client/login';
    console.log('calling ' + methodName + ' with params: ', params);
    const options = {
      headers: this.jsonHeaders,
      body: params,
      withCredentials: true
    };
    return this.httpClient.request(type, RestService.API+methodName, options)
      .pipe(map((response) => {
        return this.mapResponse(methodName, response);
      }));
  }

  public login(methodName: string, params: any, type: string) {
    console.log('calling ' + methodName + ' with params: ', params);
    const options = {
      headers: this.jsonHeaderLogin,
      body: params,
      withCredentials: true
    };
    return this.httpClient.request(type, RestService.API+methodName, options)
        .pipe(map((response) => {
          return this.mapResponse(methodName, response);
        }));
  }

    /**
   * Мапинг результата вызова
   * @param methodName
   * @param response
   */
  private mapResponse(methodName, response) {
    console.log(methodName + ' call result: ', response);
    return response;
  }

}
