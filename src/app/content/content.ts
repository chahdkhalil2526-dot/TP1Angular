import { Component } from '@angular/core';
import { Bases } from '../bases/bases';

@Component({
  imports: [Bases],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content {}
