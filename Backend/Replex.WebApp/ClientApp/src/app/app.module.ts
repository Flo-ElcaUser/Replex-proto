import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UploadModule } from '@progress/kendo-angular-upload';
import { ImportsComponent } from './imports/imports.component';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AnalyseComponent } from './analyse/analyse.component';
import { DonneesComponent } from './donnees/donnees.component';
import { DatePickerModule, DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ComboBoxModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DonneesService } from './Services/donnees.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.service';
import { PopupModule } from '@progress/kendo-angular-popup';
import { PopupAnchorDirective } from './popup.anchor-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ImportsComponent,
    TopMenuComponent,
    AnalyseComponent,
    DonneesComponent,
    PopupAnchorDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    ButtonsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    UploadModule,
    PDFExportModule,
    DatePickerModule,
    ComboBoxModule,
    InputsModule,
    NgxUiLoaderModule,
    DialogsModule,
    DropDownListModule,
    DropDownsModule,
    PopupModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AnalyseComponent, pathMatch: 'full' },
      { path: 'imports', component: ImportsComponent },
      { path: 'donnees', component: DonneesComponent }
    ]),
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
  ],
  providers: [
    DonneesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
