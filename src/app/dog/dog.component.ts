import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'dogs',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input()dog:Dog;

  constructor(private dogService: DogsService) { }

  ngOnInit(): void {
  }

}
