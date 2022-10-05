import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRenderComponent } from './for-render.component';

describe('ForRenderComponent', () => {
  let component: ForRenderComponent;
  let fixture: ComponentFixture<ForRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
