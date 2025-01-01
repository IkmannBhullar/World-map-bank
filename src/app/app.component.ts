import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-world-map';

  currentSvgId: string = "";
  currentCapital: string = "";
  currentRegion: string = "";
  currentIncomeLevel: string = "";
  currentLatitude: string = "";
  currentLongitude: string = "";

onSvgIdCurrent(svgId: string) {
  this.currentSvgId = svgId;
}

onCapitalCurrent(capital: string) {
  this.currentCapital = capital;
}

onRegionCurrent(region: string) {
  this.currentRegion = region;
}

onIncomeCurrent(income: string) {
  this.currentIncomeLevel = income;
}

onLatitudeCurrent(latitude: string) {
  this.currentLatitude = latitude;
}

onLongitudeCurrent(longitude: string) {
  this.currentLongitude = longitude;
}

}


