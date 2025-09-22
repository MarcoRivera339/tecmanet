import { Component } from '@angular/core';
import { SobreNosotrosComponent } from "../../components/sobre-nosotros/sobre-nosotros.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [SobreNosotrosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
