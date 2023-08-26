import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MatStepperModule } from "@angular/material/stepper";
import { BodyStatsComponent } from "./body-stats/body-stats.component";
import { EnergyRatesComponent } from "./energy-rates/energy-rates.component";
import { DietPreferencesComponent } from './diet-preferences/diet-preferences.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		BodyStatsComponent,
		EnergyRatesComponent,
  DietPreferencesComponent,
	],
	imports: [BrowserModule, AppRoutingModule, MatStepperModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
