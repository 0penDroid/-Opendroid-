import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendroidComponent } from './opendroid.component';

describe('OpendroidComponent', () => {
  let component: OpendroidComponent;
  let fixture: ComponentFixture<OpendroidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpendroidComponent],
    });
    fixture = TestBed.createComponent(OpendroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
