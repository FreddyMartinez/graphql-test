import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TestService } from './service/test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MatTableModule } from '@angular/material/table' 
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    CoursesListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TestService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.graphqlUri,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
