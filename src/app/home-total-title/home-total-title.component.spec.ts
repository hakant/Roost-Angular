import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTotalTitleComponent } from './home-total-title.component';

describe('HomeTotalTitleComponent', () => {
  let component: HomeTotalTitleComponent;
  let fixture: ComponentFixture<HomeTotalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTotalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTotalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main header', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header.section__title h2').textContent)
    .toContain('8,244 Properties for Sale, Rent & Real Estate');
  }));

  it('should render small title in header', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header.section__title small').textContent)
    .toContain('Villas, Apartments, Office Spaces and Commercial Buildings');
  }));
});
