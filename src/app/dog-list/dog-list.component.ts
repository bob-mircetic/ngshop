import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs: Dog[];

  constructor(private dogService: DogsService) { }

  title2: string = 'Dog List';
  theDogs: object[];

  ngOnInit(): void {
    this.getUpdates();
  }

  getUpdates() {
    return this.dogService.all().subscribe(data => this.dogs = data);
  }

}
