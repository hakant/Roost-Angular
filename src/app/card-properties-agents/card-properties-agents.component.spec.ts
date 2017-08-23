import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPropertiesAgentsComponent } from './card-properties-agents.component';

describe('CardPropertiesAgentsComponent', () => {
  let component: CardPropertiesAgentsComponent;
  let fixture: ComponentFixture<CardPropertiesAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPropertiesAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPropertiesAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
