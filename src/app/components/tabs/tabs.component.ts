import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

 @Input()options: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
