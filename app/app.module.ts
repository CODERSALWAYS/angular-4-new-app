import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';






import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharactersListComponent,
    MovieComponent,
    CharacterComponent,
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
    {
      path: 'movies',
      component: MoviesListComponent
    },
    {
      path: 'characters',
      component: CharactersListComponent
    }


      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
