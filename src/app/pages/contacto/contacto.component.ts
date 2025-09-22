import { Component } from '@angular/core';
import { ContactsComponent } from "../../components/contacts/contacts.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ContactsComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
