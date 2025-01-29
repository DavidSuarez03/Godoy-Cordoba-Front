import { Route } from "@angular/router";
import { AuthComponent } from "./pages/auth/auth.component";

export const AUTH_ROUTES: Route[] = [
  {
    path: 'start',
    component: AuthComponent
  }

]
