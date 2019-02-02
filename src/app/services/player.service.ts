import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    const uri = 'http://localhost:8000/players';
    return this.http.get(uri).map(res => {
      console.log(res);
      return res;
    });
  }

  addPlayer(nombre, equipo, precio) {
    const uri = 'http://localhost:8000/players';
    const obj = {
      nombre: nombre,
      equipo: equipo,
      precio: precio
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  editPlayer(id) {
    const uri = 'http://localhost:8000/players/' + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  updatePlayer(nombre, equipo, precio, id) {
    const uri = 'http://localhost:8000/players/' + id;
    const obj = {
      nombre: nombre,
      equipo: equipo,
      precio: precio
    };
    this.http.put(uri, obj).subscribe(res => console.log('Actualizado'));
  }

  deletePlayer(id) {
    const uri = 'http://localhost:8000/players/' + id;
    return this.http.delete(uri).map(res => {
      return res;
    });
  }

}
