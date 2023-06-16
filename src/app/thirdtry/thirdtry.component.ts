import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: string,
  label: string,
  picture: string, /* 
  cargo: string, */
  nombre: string,/*
  separator: boolean, */
  items: any
}

interface pleados {
  label: string,
  nombre: string,
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
  items2: pleados[]= [];

  ngOnInit() {
    this.items = [
        {
            id: '1',
            label: 'Jefe Dep. IT\nDinamicaMercados',
            nombre: 'david Pérez',
            picture: '../../assets/xav.webp',
            items: [
                {
                    label: 'bryan',
                },
                {
                  label: 'Actualizar datos',
                  icon: 'pi pi-refresh',
                  url: 'http://angular.io'
              },
                {
                    label: 'Cerrar Sesión',
                    icon: 'pi pi-times',
                    url: 'http://angular.io'
                }
                    ]
        },
    ];

    this.items2 = [
      {
        label: 'Jefe Q&A',
        nombre: 'Perico Palotes',
        picture: '../../assets/xav2.jpg',
        items: [
            {
                label: 'Actualizar datos',
                icon: 'pi pi-refresh',
                url: 'http://angular.io'
            },
            {
                label: 'Cerrar Sesión',
                icon: 'pi pi-times',
                url: 'http://angular.io'
            }
                ]
    },
    ]
}
}










