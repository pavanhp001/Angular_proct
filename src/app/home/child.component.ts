import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html'
})
export class ChildComponent {
	@Input('inputCountries') countries: string[];
	@Output() outputSelectedCountry = new EventEmitter<string>();
	public model = { countryName: "" };

	onCountryNameChange(countryName: string): void {
		this.outputSelectedCountry.emit(countryName);
	}
}