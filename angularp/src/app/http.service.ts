import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getPokemon();
    // this.pokemonAbilityOne();
    // this.pokemonAbilityTwo();
   }
   getTasks(){
    return this._http.get('/tasks');
   }

   readOne(id: string){
    return this._http.get('/tasks/' + id);
    // tempObservable.subscribe(data => console.log("Got one task!", data));
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }

  delete(id: string){
    return this._http.delete('/tasks/' + id);
  }

  onUpdate(id:string, updateInfo){
    return this._http.put('/tasks/' + id, updateInfo);
  }



  // getPokemon(){
  //   let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   bulbasaur.subscribe(data => console.log(data['forms'][0].name + "'s abilities are " + data['abilities'][0]['ability'].name + " and " + data['abilities'][1]['ability'].name));
  // }

  // pokemonAbilityOne(){
  //   let chlorophyll = this._http.get('https://pokeapi.co/api/v2/ability/34/');
  //   chlorophyll.subscribe(data => console.log(data['name'] +  " ability has " + data['pokemon'].length + " pokemons"));
  // }

  // pokemonAbilityTwo(){
  //   let overgrow = this._http.get('https://pokeapi.co/api/v2/ability/65/');
  //   overgrow.subscribe(data => console.log(data['name'] +  " ability has " + data['pokemon'].length + " pokemons"));
  // }
}
