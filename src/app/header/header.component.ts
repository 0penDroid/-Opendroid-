import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private filterService: FilterService
  ) {}

  onInputChange(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    this.filterService.setTermSearch(term);
  }
}
