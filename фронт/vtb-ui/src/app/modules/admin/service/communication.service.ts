import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

   public regCompleted: Subject<boolean> = new Subject();

  constructor() { }

  public emitRegComplete(){
    this.regCompleted.next(true);
  }
}
