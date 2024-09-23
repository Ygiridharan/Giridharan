import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'figma_one';
  details: any = [{ "label": "Decision Making Skill", value: "PO1" }, { "label": "Employability Skill", value: "PO2" }, { "label": "Entreprenenurial Skill", value: "PO3" }, { "label": "Contribution to Society", value: "PO4" }, { "label": "Problem Solving Skill", value: "PO5" }]
  cards = [
   { title: 'PEO-1', content: 'Employability' },
   { title: 'PEO-2', content: 'Enterperneur' },
   { title: 'PEO-3', content: 'Research & Development' },
   { title: 'PEO-4', content: 'Contribution to business world' },
   { title: 'PEO-5', content: 'Contribution to society' },
  ];
 searchText: any
selectedYear: any
selectedCity: any
panelOpenState = false;
isSidenavOpen = false;
step: number = 0; //global variable

 setStep(index: number) {
  this.step = index;
 }
  toggleSidebar() {
  this.isSidenavOpen = !this.isSidenavOpen;
 }
 onYearChange(event: any): void {
  this.selectedYear = event.value; // Capture the selected value
  console.log('Selected Year:', this.selectedYear);
 }
}
