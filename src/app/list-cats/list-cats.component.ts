import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/Cat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent implements OnInit {
  cats: Array<Cat> = [];
  constructor(private catService: CatService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCats();
  }

  fetchCats() {
    this.catService.getCats().subscribe(cats => {
      this.cats = cats
      console.log(this.cats)
  })
  }

  editCat(id:number) {
    this.router.navigate(["cats", id, "edit"])
  }

  deleteCat(id: number) {
    console.log("Delete")
    this.catService.deleteCat(id).subscribe(res => {
      this.fetchCats();
    })
  }

}
