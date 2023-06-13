import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string,
  picture: string,
  items: any
}


@Component({
  selector: 'app-thirdtry',
  templateUrl: './thirdtry.component.html',
  styleUrls: ['./thirdtry.component.scss']
})
export class ThirdtryComponent implements OnInit 

{


  items!: MenuItem[];


  ngOnInit(): void {
      this.items = [
          {
              label: 'Pérez B. Bryan',
              picture: '../../assets/qr-test.png',
              items: [
                  {label: 'Departamento IT'},
                  {separator: true},
                  {label: 'Cerrar sesión'}
              ]
          },
      ];
  }
}










