// Importar los módulos necesarios desde Angular Core
import { Component, ElementRef, HostListener } from '@angular/core';

// Definir el componente NavigationComponent
@Component({
  selector: 'app-navigation', // Selector del componente
  templateUrl: './navigation.component.html', // Plantilla HTML del componente
  styleUrls: ['./navigation.component.scss'] // Estilos del componente
})
export class NavigationComponent {
  isOpen = false; // Variable para controlar el estado del menú desplegable

  dropdownElement: HTMLElement; // Elemento del menú desplegable

  // Constructor del componente
  constructor(private el: ElementRef) {
    this.dropdownElement = el.nativeElement; // Acceder al elemento DOM del menú desplegable
  }

  // Decorador HostListener que escucha los eventos de clic en el documento
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    // Verificar si el objetivo del evento está fuera del menú desplegable
    if (!this.dropdownElement.contains(event.target as Node)) {
      this.isOpen = false; // Cerrar el menú si se hace clic fuera de él
    }
  }

  // Función para alternar el estado del menú desplegable
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}

