import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './listDbz.component.html',
  styleUrls: ['./listDbz.component.css']
})
export class ListDbzComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input() characterList:Character[]=[];

  onDeleteCharacter(id:string):void{
    this.onDeleteId.emit(id);
  }

}
