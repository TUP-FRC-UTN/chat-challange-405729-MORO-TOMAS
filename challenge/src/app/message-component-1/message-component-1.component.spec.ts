import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent1Component } from './message-component-1.component';

describe('MessageComponent1Component', () => {
  let component: MessageComponent1Component;
  let fixture: ComponentFixture<MessageComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
