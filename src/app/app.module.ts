import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayGamesComponent } from './display-games/display-games.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { ShowGameComponent } from './show-game/show-game.component';
import { ShowUserComponent } from './show-user/show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayGamesComponent,
    DisplayUsersComponent,
    EditGameComponent,
    EditUserComponent,
    DeleteUserComponent,
    DeleteGameComponent,
    CreateUserComponent,
    CreateGameComponent,
    ShowGameComponent,
    ShowUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
