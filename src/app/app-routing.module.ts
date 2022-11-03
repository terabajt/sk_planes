import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { DashboardComponent } from "./core/dashboard/dashboard.component";
import { LoginComponent } from "./core/login/login.component";
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { AuthGuard } from "./core/services/auth.guard";


const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent},
{ 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
children: [
    { path: '', redirectTo: 'flights', pathMatch: 'full'},
    { path: 'flights', loadChildren: () => import('./flights/flights.module').then(x => x.FlightsModule)},
]},
{ path: '**', component: PageNotFoundComponent }

];


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}