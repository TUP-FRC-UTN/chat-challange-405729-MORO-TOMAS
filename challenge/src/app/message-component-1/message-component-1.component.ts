import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-message-component-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-component-1.component.html',
  styleUrl: './message-component-1.component.css'
})
export class MessageComponent1Component {
  @Input() userName: string| undefined;
  @Output() messageEvent = new EventEmitter<string>();
  message: string | undefined 

  sendMessage(){
    var messageObj = {
      msg: this.message,
      user: this.userName
    };
    this.messageEvent.emit(this.message)
    this.message = undefined
  }

}
