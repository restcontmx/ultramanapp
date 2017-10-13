import { TestBed, async } from '@angular/core/testing';
import { CompetitionsComponent } from './competitions.component'
import { CompetitionsService } from './../services/competitions.service'

describe( 'CompetitionsComponent', () => {
    beforeEach( async(()=>{
        TestBed.configureTestingModule({
            declarations : [
                CompetitionsComponent
            ],
            providers: [CompetitionsService]
        }).compileComponents();
    }));
    it( 'should create component', async(()=> {
        const fixture = TestBed.createComponent( CompetitionsComponent )
        const competitions = fixture.debugElement.componentInstance
        expect(competitions).toBeTruthy()
    }));
    it(`should have title 'Competitions'`, async(()=>{
        const fixture = TestBed.createComponent( CompetitionsComponent )
        const competitions = fixture.debugElement.componentInstance
        expect(competitions.title).toEqual( "Competitions" )
    }));
})