import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { Subscription } from "rxjs";

import { HttpModule } from '@angular/http'
import { CookieService } from 'ngx-cookie-service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { DashboardComponent } from './auth/dashboard.component'
import { MainComponent } from './auth/main.component'
import { NavBarComponent } from './menu/navbar.component'
import { SideBarComponent } from './menu/sidebar.component'

import { LoginComponent } from './auth/login.component'
import { SetupComponent } from './auth/setup.component'
import { AlwaysAuthGuard } from './auth/alwaysonwarth.service'
import { IsSetted } from './auth/issetted.service'
import { AuthService } from './auth/auth.service'

import { CompetitionService } from './competitions/competition.service'
import { CompetitionsComponent } from './competitions/competitions.component'
import { CompetitionsListComponent } from './competitions/competitions.list.component'
import { CompetitionsNewComponent } from './competitions/competitions.new.component'
import { CompetitionsDetailComponent } from './competitions/competitions.detail.component'
import { CompetitionsRegistrationComponent } from './competitions/competition.registration.component'
import { RegistrationDetailComponent } from './competitions/competitions.registration.detail.component'
import { RegistrationEditComponent } from './competitions/competitions.registration.edit.component'
import { CompetitionsResultsComponent } from './competitions/competitions.results.component'
import { CompetitionsStageComponent } from './competitions/competitions.stage.component'

import { CategoryService } from './categories/category.service'
import { CategoriesComponent } from './categories/categories.component'
import { CategoriesListComponent } from './categories/categories.list.component'
import { CategoriesNewComponent } from './categories/categories.new.component'
import { CategoriesDetailComponent } from './categories/categories.detail.component'

import { CompetitionTypeService } from './competition_types/competition_types.service'
import { RegistrationService } from './competitions/registration.service'
import { StartTimeService } from './start_times/starttime.service'

import { HelpComponent } from './settings/help.component'

import { RouterModule, Routes } from '@angular/router'
import { DateTimePickerModule } from 'ng-pick-datetime'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    {   path: 'setup', 
        component: SetupComponent
    },
    {   path: 'login', 
        component: LoginComponent,
        canActivate: [ IsSetted ]
    },
    { 
        path: '', component: DashboardComponent,
        canActivate: [ AlwaysAuthGuard ],
        children : [
            {
                path: '',
                component: MainComponent 
            },
            {
                path: 'competitions',
                component: CompetitionsComponent,
                children : [
                    { path: '', component : CompetitionsListComponent },
                    { path: 'new', component : CompetitionsNewComponent },
                    { path: 'detail/:id', component : CompetitionsDetailComponent },
                    { path: 'stage/:id', component : CompetitionsDetailComponent },
                    { path: 'stage/:id', component : CompetitionsDetailComponent },
                    { path: 'registration/:id', component : CompetitionsRegistrationComponent },
                    { path: 'registration/detail/:id', component : RegistrationDetailComponent },
                    { path: 'registration/edit/:id', component : RegistrationEditComponent },
                    { path: 'results/:id', component : CompetitionsResultsComponent },
                    { path: 'stage/:id/:stageId', component : CompetitionsStageComponent }
                ]
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                children : [
                    { path: '', component : CategoriesListComponent },
                    { path: 'new', component : CategoriesNewComponent },
                    { path: 'detail/:id', component : CategoriesDetailComponent }                    
                ]
            },
            {
                path: 'help',
                component: HelpComponent
            }
        ]
    },
];

// ng module
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        SideBarComponent,
        DashboardComponent,
        LoginComponent,
        SetupComponent,
        CompetitionsComponent,
        CompetitionsListComponent,
        CompetitionsNewComponent,
        CompetitionsDetailComponent,
        CategoriesComponent,
        CategoriesListComponent,
        CategoriesNewComponent,
        CategoriesDetailComponent,
        CompetitionsRegistrationComponent,
        RegistrationDetailComponent,
        RegistrationEditComponent,
        CompetitionsResultsComponent,
        CompetitionsStageComponent,
        MainComponent,
        HelpComponent
    ],
    imports: [
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        DateTimePickerModule
    ],
    providers: [
        AuthService,
        CookieService,
        AlwaysAuthGuard,
        IsSetted,
        CompetitionService,
        CompetitionTypeService,
        CategoryService,
        RegistrationService,
        StartTimeService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
