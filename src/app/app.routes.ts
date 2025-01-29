import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('../app/feature/login/auth.routes').then(
                mod => mod.AUTH_ROUTES
            )
    },
    {
        path: 'user',
        loadChildren: () =>
            import('../app/feature/user/user.routes').then(
                mod => mod.USER_ROUTES
            )
    }
];
