import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private termSearchSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor() {}

  setTermSearch(term: string): void {
    this.termSearchSubject.next(term);
  }

  getTermSearch(): Observable<string> {
    return this.termSearchSubject.asObservable();
  }
}
