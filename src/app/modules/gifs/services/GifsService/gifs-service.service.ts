import { APIKEY, APIURL } from '../../../shared/constants/api.constant';
import {
  Gif,
  ISearchResponse,
} from '../../../shared/interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor() {
    this.loadLocalStorage();
    console.log("Gifs Service Ready");

  }
  // * Injects
  private http = inject(HttpClient);

  private _tagsHistory: string[] = [];
  public gifsList: Gif[] = [];

  // * Getters
  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  // * Methods
  public organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    // Request query params
    const params: HttpParams = new HttpParams()
      .set('api_key', APIKEY)
      .set('limit', 10)
      .set('q', tag);

    // Gif Search Request
    this.http
      .get<ISearchResponse>(`${APIURL}/search`, {
        params,
      })
      .subscribe((res: ISearchResponse) => {
        console.log(res);
        this.gifsList = res.data;
        console.log(this.gifsList);
      });
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!(localStorage.getItem('history'))) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }
}
