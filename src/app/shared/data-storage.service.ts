import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private dataService: DataService) {}

    tehnicalDataStorage() {
// this.http.put('https://sszos-9b7df.firebaseio.com/tehnicaldata.json', this.dataService.);
    }
}
