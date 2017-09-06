import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderSearchComponent } from './header-search.component';

describe('HeaderSearchComponent', () => {
  let component: HeaderSearchComponent;
  let fixture: ComponentFixture<HeaderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('has two types of search - rent and buy', () => {
    const debugElement = fixture.debugElement;
    const radioButtons = debugElement.queryAll(By.css('div.dropdown-menu input'));

    expect(radioButtons[0].nativeElement.value).toBe('rent');
    expect(radioButtons[1].nativeElement.value).toBe('buy');
  });
});
