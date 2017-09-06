import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderTopComponent } from './header-top.component';

describe('HeaderTopComponent', () => {
  let component: HeaderTopComponent;
  let fixture: ComponentFixture<HeaderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('has 5 main buttons', () => {
    const debugElement = fixture.debugElement;
    const buttons = debugElement.queryAll(By.css('ul.top-nav>li>a'));

    expect(buttons.length).toBe(5);
    expect(buttons[0].nativeElement.textContent).toBe('Register');
    expect(buttons[1].nativeElement.textContent).toBe('Login');
    expect(buttons[2].children[0].attributes.class).toContain('zmdi-facebook');
    expect(buttons[3].children[0].attributes.class).toContain('zmdi-twitter');
    expect(buttons[4].children[0].attributes.class).toContain('zmdi-google');
  });

  it('email and phone number is correctly displayed', () => {
    const debugElement = fixture.debugElement;
    const spans = debugElement.queryAll(By.css('li.hidden-xs span'));

    expect(spans[0].nativeElement.textContent).toBe('hello@Roost.com');
    expect(spans[1].nativeElement.textContent).toBe('001-541-754-3010');
  });
});
