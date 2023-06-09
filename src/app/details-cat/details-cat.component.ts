import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/Cat';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-cat',
  templateUrl: './details-cat.component.html',
  styleUrls: ['./details-cat.component.css']
})
export class DetailsCatComponent implements OnInit {
  id!: string;
  cat!: Cat;
  constructor(private route: ActivatedRoute, private catService: CatService){
    // this.route.params.subscribe(res => {
    //   //do this in subscription to avoid async
    //   // not finishing before id available
    //   this.id= res['id'];
    //   this.catService.getCat(this.id).subscribe(res => {
    //     this.cat=res;
    //   })
    // })
    this.fetchData()
  }

  fetchData(){
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id
    }), mergeMap(id => this.catService.getCat(id))).subscribe(res => {
      this.cat=res;
    })
  }

  ngOnInit(): void {

  }

}
