import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAComponent } from './detail-a.component';

describe('DetailAComponent', () => {
  let component: DetailAComponent;
  let fixture: ComponentFixture<DetailAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
