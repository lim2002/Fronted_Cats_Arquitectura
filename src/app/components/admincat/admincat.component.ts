import { Component, inject } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Fact } from '../models/fact';

@Component({
  selector: 'app-admincat',
  templateUrl: './admincat.component.html',
  styleUrls: ['./admincat.component.css']
})
export class AdmincatComponent {

  catService: CatService = inject(CatService);
  cats: Fact[] = [];

  ngOnInit(): void {
    console.log('>>> ngOnInit adminCatComponent');
    this.catService.getCats().subscribe(
      cats => {
        console.log(cats);
        this.cats = cats;
      }
    );
  }

}
