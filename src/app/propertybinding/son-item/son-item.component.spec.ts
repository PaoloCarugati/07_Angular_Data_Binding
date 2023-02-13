import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonItemComponent } from './son-item.component';

describe('SonItemComponent', () => {
  let component: SonItemComponent;
  let fixture: ComponentFixture<SonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
