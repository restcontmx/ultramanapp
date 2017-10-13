import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component'
import { CompetitionComponent } from './competition/competition.component'
import { CompetitionsService } from './services/competitions.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CompetitionsComponent,
        CompetitionComponent
      ],
      providers: [CompetitionsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('UltraMan App');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('UltraMan App!');
  }));
});
