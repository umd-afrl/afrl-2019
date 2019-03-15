import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})

@Injectable()
export class MicrowaveService {
	private url = 'http://192.168.1.8'; // full uri of the service to consume here

	constructor(private http: HttpClient) {
	}

	get(): Observable<number> {
		return this.http.get<number>(this.url);
	}
}
