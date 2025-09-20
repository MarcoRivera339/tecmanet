import { Component } from '@angular/core';
import { CaroulselComponent } from "../../components/caroulsel/caroulsel.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CaroulselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
