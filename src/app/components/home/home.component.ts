import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      // Define void state with opacity 0 for initial state
      state('void', style({
        opacity: 0
      })),
      // Transition for entering and leaving the DOM
      transition('void <=> *', animate('500ms ease-in-out')), // Smooth transition for 300ms
    ]),
  ]
})
export class HomeComponent implements OnInit {
  modalVisible: boolean = false; // Used to control the visibility of the modal

  constructor(){}

  cards = [
    {
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'path/to/icon.svg' // Replace with the actual path to your icon
    },
    {
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'path/to/icon.svg' // Replace with the actual path to your icon
    },
    {
      headline: 'Headline goes here',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum.',
      icon: 'path/to/icon.svg' // Replace with the actual path to your icon
    },
  ];

  ngOnInit() {
  }

  toggleModal(): void {
    this.modalVisible = !this.modalVisible; // This will now toggle the visibility
  }
}
