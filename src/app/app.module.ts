import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { NgDatepickerModule } from 'ng2-datepicker';

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { FilterTitlePipe } from './filter-title.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './_layout/header/header.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { DashboardLayoutComponent } from './_layout/dashboard-layout/dashboard-layout.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { UserService } from './services/user.service';
import { AuthguardGuard } from './guard/authguard.guard';
import { PolicyComponent } from './policy/policy.component';

declare var require: any;


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilterTitlePipe,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutusComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardLayoutComponent,
    SearchHistoryComponent,
    AboutUsHomeComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DlDateTimePickerDateModule,
    NgDatepickerModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
