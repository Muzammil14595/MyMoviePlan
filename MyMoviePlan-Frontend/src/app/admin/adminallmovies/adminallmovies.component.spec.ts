import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallmoviesComponent } from './adminallmovies.component';

describe('AdminallmoviesComponent', () => {
  let component: AdminallmoviesComponent;
  let fixture: ComponentFixture<AdminallmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminallmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminallmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
