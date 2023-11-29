import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { findCities } from './operators/find-cities.operator';

export interface City {
  city: string;
  population: string;
  state: string;
}

@Component({
  selector: 'app-type-ahead',
  templateUrl: './typeahead.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeAheadComponent implements OnInit {
  @ViewChild('searchForm', { static: true })
  searchForm!: NgForm;

  searchValue = '';
  suggestions$!: Observable<City[]>;
  cities$ = new BehaviorSubject<City[]>([]);
  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.getCities().subscribe();

    this.suggestions$ = this.searchForm.form.valueChanges.pipe(
      findCities(this.cities$)
    );
  }

  getCities = () => {
    const endpoint =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    return this.httpService.get<City[]>(endpoint).pipe(
      shareReplay(1),
      tap((cities) => this.cities$.next(cities))
    );
  };
}
