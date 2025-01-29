import { Route } from "@angular/router";
import { AuthComponent } from "./pages/create/user.component";

export const USER_ROUTES: Route[] = [
  {
    path: 'create',
    component: AuthComponent
  }

]
