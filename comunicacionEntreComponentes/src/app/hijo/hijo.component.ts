import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
})
export class HijoComponent {
  constructor() { }

  @Input() casa!: string;
  @Input() color!: string;
  @Input() titulo!: string;

  @Output() elementoAdd = new EventEmitter<any>();

  agregarAlumno(nombre: string): void {
    console.log(nombre);
    this.elementoAdd.emit({ nombre: nombre, casa: this.casa, color: this.color });
  }
}
