import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent1Component } from '../message-component-1/message-component-1.component';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [RouterOutlet, MessageComponent1Component],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
    messages : string[]= [];

    mariaName : string = 'María';
    pepeName : string = 'Pepe';

    onMessageSent(message : string){
      debugger
      console.log("recibiendo desde mensaje "+message);
      
    this.messages.push(message)
    }
}
