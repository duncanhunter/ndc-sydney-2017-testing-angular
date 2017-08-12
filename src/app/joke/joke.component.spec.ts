import { JokeComponent } from './joke.component';
import { Observable } from 'rxjs/Observable';
import { TestBed, ComponentFixture, tick, async, fakeAsync } from '@angular/core/testing';
import { JokeService } from './joke.service';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { By } from '@angular/platform-browser';

describe(`Component: JokeComponent`, () => {

  let component: JokeComponent;
  let jokeService: JokeService;
  let fixture: ComponentFixture<JokeComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [JokeComponent],
      providers: [
        JokeService
      ]
    });

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    jokeService = TestBed.get(JokeService);
    de = fixture.debugElement;

  }));

  it(`should add 1 + 1 `, () => {
    expect(1 + 1).toEqual(2);
  });

  it(`should have a title of "Chuck Norris Quotes"`, () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it(`should set the joke property when component initialized`, () => {
    spyOn(jokeService, 'getJoke')
      .and.returnValue(Observable.of('FAKE JOKE'));

    fixture.detectChanges();

    expect(component.joke).toEqual('FAKE JOKE');
  });

  it(`should have the joke content bound to the the page`, () => {
    spyOn(jokeService, 'getJoke')
      .and.returnValue(Observable.of('FAKE JOKE'));

    fixture.detectChanges();

    let el = de.query(By.css('p')).nativeElement;

    expect(el.textContent).toEqual('FAKE JOKE');

  });

  it(`should get next quote on click - with fakeAsync`, fakeAsync(() => {
    spyOn(jokeService, 'getJoke')
      .and.returnValues(
      Observable.of('FAKE JOKE'),
      Observable.of('FAKE JOKE 2').timeout(2000));

    fixture.detectChanges();
    let el = de.query(By.css('p')).nativeElement;
    expect(el.textContent).toEqual('FAKE JOKE');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    tick(3000);
    expect(el.textContent).toEqual('FAKE JOKE 2');
  }));

  it(`should get next quote on click - with async`, async(() => {
    spyOn(jokeService, 'getJoke')
      .and.returnValues(
      Observable.of('FAKE JOKE'),
      Observable.of('FAKE JOKE 2'));

    fixture.detectChanges();
    let el = de.query(By.css('p')).nativeElement;
    expect(el.textContent).toEqual('FAKE JOKE');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toEqual('FAKE JOKE 2');
    });
  }));

  it('should get next quote on click - with done', (done) => {

    let spy = spyOn(jokeService, 'getJoke')
      .and.returnValues(
      Observable.of('FAKE JOKE'),
      Observable.of('FAKE JOKE 2'));

    fixture.detectChanges();
    let el = de.query(By.css('p')).nativeElement;

    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    spy.calls.mostRecent().returnValue
      .subscribe(() => {
        fixture.detectChanges();
        expect(el.textContent).toEqual('FAKE JOKE 2');
        done();
      });
  });

});
