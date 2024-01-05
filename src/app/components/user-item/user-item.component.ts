import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
})
export class UserItemComponent {
  @Input() user: User | null = null;
  @Output() selectUser = new EventEmitter<User>();
}
