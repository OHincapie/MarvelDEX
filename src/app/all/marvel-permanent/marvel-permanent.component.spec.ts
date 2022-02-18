import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelPermanentComponent } from './marvel-permanent.component';

describe('MarvelPermanentComponent', () => {
  let component: MarvelPermanentComponent;
  let fixture: ComponentFixture<MarvelPermanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelPermanentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
