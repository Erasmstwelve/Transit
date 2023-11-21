import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive', // Selector del componente
  templateUrl: './nav-responsive.component.html', // Plantilla HTML del componente
  styleUrls: ['./nav-responsive.component.scss'] // Estilos del componente
})
export class NavResponsiveComponent {
  isNavbarOpen: boolean = false; // Propiedad para rastrear si el menú de navegación está abierto

  isInfoOpen: boolean = false; // Propiedad para rastrear si la información está abierta

  isImage1Active: boolean = true; // Propiedad para rastrear el estado de una imagen

  // Método para alternar el estado del menú de navegación
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen; // Cambia el estado del menú de navegación
    this.isImage1Active = !this.isImage1Active; // Alterna el estado de una imagen
    this.isInfoOpen = false; // Cierra el estado de información
  }

  // Método para alternar el estado de la información
  toggleinfo() {
    this.isInfoOpen = !this.isInfoOpen; // Cambia el estado de la información
  }
}

