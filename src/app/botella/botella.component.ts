import { Component, OnInit } from '@angular/core';
interface Product {
  name: string,
  image: string,
  price: string
}

@Component({
  selector: 'app-botella',
  templateUrl: './botella.component.html',
  styleUrls: ['./botella.component.scss']
})
export class BotellaComponent implements OnInit {
  products!: Product[];
  selectedProduct!: Product;

  ngOnInit(): void {
    this.products= [
      {name: "Multipack 500ml 12 unidades",
      image: "qr-test.png",
      price: "$2"},
      {name: "Multipack 250ml 12 unidades",
      image: "qr-test.png",
      price: "$2,84"},
      {name: "Multipack 2500ml 6 unidades",
      image: "qr-test.png",
      price: "$3,68"},
      {name: "Multipack 250ml 6 unidades",
      image: "qr-test.png",
      price: "$4,52"},
      {name: "Botellon 1.5l",
      image: "qr-test.png",
      price: "$5,36"},
      {name: "Botellon 2.0l",
      image: "qr-test.png",
      price: "$6,2"},
      {name: "Botellon 2.0l",
      image: "qr-test.png",
      price: "$7,04"}
    ]
    }


  onRowSelect(event: any) {
    console.log(event)
}

}
