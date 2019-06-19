import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardInfoComponent } from './detail-card-info.component';

describe('DetailCardInfoComponent', () => {
  let component: DetailCardInfoComponent;
  let fixture: ComponentFixture<DetailCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
