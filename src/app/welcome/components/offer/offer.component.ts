// Importa Component y Input desde el módulo '@angular/core'.
import { Component, Input } from '@angular/core';

// Define el componente 'OfferComponent'.
@Component({
  selector: 'app-offer', // Selector personalizado para el componente.
  templateUrl: './offer.component.html', // Plantilla HTML asociada al componente.
  styleUrls: ['./offer.component.scss'] // Archivo de estilos SCSS asociado al componente.
})
export class OfferComponent {
  @Input() title?: string;   // Declaración de una propiedad de entrada llamada 'title' que puede recibir una cadena de texto.
  @Input() price?: number;   // Declaración de una propiedad de entrada llamada 'price' que puede recibir un número.
  @Input() bg_image?: string; // Declaración de una propiedad de entrada llamada 'bg_image' que puede recibir una cadena de texto.
}
