import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing.module';
import { UsersService } from './users.service';
import { AuthenticationService } from './auth-service.service';
import { AlertService } from './services/alert.service';
import { AuthgaurdService } from './services/authgaurd.service';
import { RegisterComponent } from './register/register.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './helper/fake-backend-prvider.service';
import { MockBackend } from '@angular/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule ,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [
    AuthgaurdService,
    AlertService,
    AuthenticationService,
    UsersService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
