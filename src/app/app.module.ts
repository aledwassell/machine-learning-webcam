import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PredictorViewComponent} from './predictor-view/predictor-view.component';
import {WebcamComponent} from './webcam/webcam.component';
import {ModelFileUploadComponent} from './model-file-upload/model-file-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SerialConnectorComponent} from './serial-connector/serial-connector.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictorViewComponent,
    WebcamComponent,
    ModelFileUploadComponent,
    SerialConnectorComponent,
  ],
  imports: [
    // Angular material modules.
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    // Angular modules.
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
