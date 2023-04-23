import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/Cat';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent implements OnInit {
  cats: Array<Cat> = [];
  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats().subscribe(cats => {
      this.cats = cats
      console.log(this.cats)
  })
  }

}
