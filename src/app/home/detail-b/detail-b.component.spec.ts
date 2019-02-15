import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBComponent } from './detail-b.component';

describe('DetailBComponent', () => {
  let component: DetailBComponent;
  let fixture: ComponentFixture<DetailBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
