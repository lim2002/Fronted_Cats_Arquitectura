import { Component, inject } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Fact } from '../models/fact';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  catService: CatService = inject(CatService);
  cats: Fact[] = [];

  ngOnInit(): void {
    console.log('>>> ngOnInit CatComponent');
    this.catService.getCats().subscribe(
      cats => {
        console.log(cats);
        this.cats = cats;
      }
    );
    }

}
