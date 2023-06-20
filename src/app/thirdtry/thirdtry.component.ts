import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: string,
  label: string,
  picture: string,
  nombre: string,
  items: any,
  mensajes: string
}


interface pleados {
  label: string,
  nombre: string,
  picture: string,
  mensajes: string,
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
            nombre: 'David Pérez',
            picture: '../../assets/xav.webp',
            mensajes:'18',
            items: [
                {
                    separator: true,
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
        label: 'Jefe QA',
        nombre: 'Perico Palotes',
        picture: '../../assets/xav2.jpg',
        mensajes:'5',
        items: [
            {
              separator: true,
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
    ]
}
}










