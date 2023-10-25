import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { AuthComponent } from "./demo/auth/auth.component";
import { DemoPipeComponent } from "./demo/demo-pipe/demo-pipe.component";

export const APP_ROUTES: Routes = [
  {
    path: "users",
    component: UsersComponent
  }, {
    path: "login",
    component: AuthComponent
  }, {
    path: "pipe",
    component: DemoPipeComponent
  }
]
