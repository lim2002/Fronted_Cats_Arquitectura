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
  currentPage: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getCats(this.currentPage, this.pageSize).subscribe(response => {
      this.cats = response.data.content;
      this.totalElements = response.data.totalElements;
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
