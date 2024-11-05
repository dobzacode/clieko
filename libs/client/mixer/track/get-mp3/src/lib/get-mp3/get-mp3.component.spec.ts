import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetMp3Component } from './get-mp3.component';

describe('GetMp3Component', () => {
  let component: GetMp3Component;
  let fixture: ComponentFixture<GetMp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMp3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(GetMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
