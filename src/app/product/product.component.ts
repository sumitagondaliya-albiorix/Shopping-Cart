import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch data from the local JSON file
    this.http.get<any[]>('/assets/dummy-data.json').subscribe(product => {
      this.product = product;
    });
  }
}


