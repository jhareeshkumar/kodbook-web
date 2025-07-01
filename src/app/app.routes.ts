import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Feed } from './features/feed/feed';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Login } from './features/auth/login/login';
import { authGuard } from './shared/guards/auth-guard';
import { SignUp } from './features/auth/sign-up/sign-up';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'feed',
                pathMatch: 'full'
            },
            {
                path: 'feed',
                component: Feed,
                canActivate: [authGuard]
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'sign-up',
                component: SignUp
            }
        ]
    }
];
