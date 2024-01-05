import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
})
export class UserItemComponent {}
