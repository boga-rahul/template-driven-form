import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  //   const myHero =  new Hero(42, 'SkyDog',
  //                      'Fetch any object at any distance',
  //                      'Leslie Rollover');
  // console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  }

  onSubmit() {  this.submitted = true; }

  newHero() {
    this.model = new Hero(42, "", "");
  }

}
