import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { HttpClient, HttpHeaders} from '@angular/common/http'; /*Para enviar la información al backend*/
import { Global } from '../services/global';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
    public url: string;

    constructor(
      private _HTTP: HttpClient
    ){
        /*SIEMPRE DEBES INICIALIZAR TU OBJETO ARRAY*/
        this.url = Global.url;
    }

    saveTask(obj: Task): Observable<any>{
      const params = JSON.stringify(obj); /*Convertimos el objeto a JSON String para que nuestra API los coja*/

      /*CABEZARAS:CON QUE FORMATO SE ENVIA LA INFORMACIÓN*/
      const headers = new  HttpHeaders().set('Content-Type', 'application/json');

      /*HACEMOS LA PETICION POR POST*/
      /* utilizamos HttpClient.post(url + nombre del metodo del backend), parametros, cabezera */
      return this._HTTP.post(this.url + 'save-task', params, {headers});
    }
}
