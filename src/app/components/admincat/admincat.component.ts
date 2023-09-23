import { Component, inject } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { Fact } from '../models/fact';
import { NewFact } from '../models/newFact';

@Component({
  selector: 'app-admincat',
  templateUrl: './admincat.component.html',
  styleUrls: ['./admincat.component.css']
})
export class AdmincatComponent {

  catService: CatService = inject(CatService);
  cats: Fact[] = [];
  newFact: NewFact = { mensaje: '' }; 
  currentPage: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;

  ngOnInit(): void {
    console.log('>>> ngOnInit adminCatComponent');
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getCats(this.currentPage, this.pageSize).subscribe(response => {
      this.cats = response.data.content;
      this.totalElements = response.data.totalElements;
    });
  }

  addCat(): void {
    this.catService.addCat(this.newFact).subscribe(() => {
      this.loadCats();
    });
  }

  editCat(id: number): void {
    this.catService.editCat(id, this.newFact).subscribe(() => {
      this.loadCats();
    });
  }

  deleteCat(id: number): void {
    this.catService.deleteCat(id).subscribe(() => {
      this.loadCats();
    });
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.totalElements / this.pageSize) - 1) {
      this.currentPage++;
      this.loadCats();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadCats();
    }
  }

}
