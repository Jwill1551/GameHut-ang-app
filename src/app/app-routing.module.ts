import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './create-game/create-game.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DisplayGamesComponent } from './display-games/display-games.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowGameComponent } from './show-game/show-game.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  { path: "create-game", component: CreateGameComponent },
  { path: "create-user", component: CreateUserComponent},
  { path: "display-games", component: DisplayGamesComponent },
  { path: "display-users", component: DisplayUsersComponent },
  { path: "show-game/:id", component: ShowGameComponent },
  { path: "show-user/:id", component: ShowUserComponent },
  { path: "edit-game/:id", component: EditGameComponent },
  { path: "edit-user/:id", component: EditUserComponent },
  { path: "delete-game/:id", component: DeleteGameComponent },
  { path: "delete-user/:id", component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
