import { Component, OnInit } from '@angular/core';


interface MenuItem {
  label: string,
  image: string,
  items: any
}


@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.scss']
})


export class Perfil1Component implements OnInit{
  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              image: 'qr-test.png',
              items: [{
                      label: 'New', 
                      items: [
                          {label: 'User' },
                          {label: 'Filter' }
                      ]
                  },
                  {label: 'Open'},
                  {separator: true},
                  {label: 'Quit'}
              ]
          },
/*           {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }, */
/*           {
              label: 'Help',
              icon: 'pi pi-fw pi-question',
              items: [
                  {
                      label: 'Contents',
                      icon: 'pi pi-pi pi-bars'
                  },
                  {
                      label: 'Search', 
                      icon: 'pi pi-pi pi-search', 
                      items: [
                          {
                              label: 'Text', 
                              items: [
                                  {
                                      label: 'Workspace'
                                  }
                              ]
                          },
                          {
                              label: 'User',
                              icon: 'pi pi-fw pi-file',
                          }
                  ]}
              ]
          }, */
/*           {
              label: 'Actions',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Save', icon: 'pi pi-fw pi-save'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                      ]
                  },
                  {
                      label: 'Other',
                      icon: 'pi pi-fw pi-tags',
                      items: [
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          } */
      ];
  }
}

