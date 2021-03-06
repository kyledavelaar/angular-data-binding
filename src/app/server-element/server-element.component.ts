import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //decorator @Input gets server from parent app.component
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('kyleMessage') kyle: string;

  constructor() { }

  ngOnInit() {
  }

}
