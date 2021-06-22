import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Pokemon } from '../models';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'app-poke-list',
  template: `
    <div style="text-align:center; margin-left : 50%;">
      <p style="text-align:center; inline"><button (click)="previousPage()">Previous</button><button (click)="nextPage()">Next</button></p>
    </div>
    <app-poke-card 
      *ngFor="let pokemon of pokemons" 
      [pokemon]="pokemon"
    ></app-poke-card>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      margin: 40px auto;
    }
  `]
})
export class PokeListComponent {
  pokemons: Pokemon[] = [];

  constructor(
    public pokeService: PokeAPIService
  ) {
    pokeService
      .fetchPokemons()
      .pipe(
        // Transformation sur le flux
        // On transforme chaque valeur (PagedAPIResult<PokemonInfo>) en liste de pokemon (Pokemon[])
        // Merge map nous permet de faire la transformation
        mergeMap(pagedResult => this.pokeService.fetchFullPokemonForPage(pagedResult))
      )
      .subscribe(pokemons => this.pokemons = pokemons)
  }

  previousPage(){
    console.log("changeThePage to the previous one");
    //Recuperer l'url précedent et le charger ce qui vas modifier la liste des pokemons
    //Puisque notre pokeService est abonné à via le .subscribe, cela mettra à jour automatiquement la liste
  }
  nextPage(){
    console.log("changeThePage to the next one");
    //De même via cette méthode mais avec l'url suivant
  }
}
