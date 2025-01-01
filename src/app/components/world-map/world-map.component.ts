import { Component, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { CountryInfoComponent } from '../country-info/country-info.component';
import { WorldbankApiService } from '../../worldbank-api.service';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})

export class WorldMapComponent {


  constructor(
    private elementRef: ElementRef,
    private worldApiService: WorldbankApiService
    ) { }

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector("svg");
    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((path: SVGPathElement) => {

      path.addEventListener("click", this.handleClick.bind(this));
      });
    }

@Output() svgIdCurrent = new EventEmitter<string>();
@Output() capitalCurrent = new EventEmitter<string>();
@Output() regionCurrent = new EventEmitter<string>();
@Output() incomeLevelCurrent = new EventEmitter<string>();
@Output() latitudeCurrent = new EventEmitter<string>();
@Output() longitudeCurrent = new EventEmitter<string>();

@ViewChild(CountryInfoComponent)

private countryInfoComponent!: CountryInfoComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;


  this.worldApiService.getCountryData(countryId).subscribe((data: any) => {
    const name = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const latitude = data[1][0].latitude;
    const longitude = data[1][0].longitude;

    this.svgIdCurrent.emit(name);
    this.capitalCurrent.emit(capitalCity);
    this.regionCurrent.emit(region);
    this.incomeLevelCurrent.emit(income);
    this.latitudeCurrent.emit(latitude);
    this.longitudeCurrent.emit(longitude);
  });
}
}
