import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form-validation',
  templateUrl: './hero-form-validation.component.html',
  styleUrls: ['./hero-form-validation.component.scss']
})
export class HeroFormValidationComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  hero = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  constructor() { }

  ngOnInit(): void {
  }

}
