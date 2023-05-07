import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLivesComponent } from './table-lives.component';

describe('TableLivesComponent', () => {
  let component: TableLivesComponent;
  let fixture: ComponentFixture<TableLivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
