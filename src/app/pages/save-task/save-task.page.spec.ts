import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveTaskPage } from './save-task.page';

describe('SaveTaskPage', () => {
  let component: SaveTaskPage;
  let fixture: ComponentFixture<SaveTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
