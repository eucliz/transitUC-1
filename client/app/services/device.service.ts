import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService {
    constructor(private http:Http){
        console.log('Device Service Initialized...');
    }

    getDevices() {
        return this.http.get('http://localhost:3000/api/devices')
            .map(res => res.json());
    }

    getPositionsByIMEI(imei: number) {
        return this.http.get(`http://localhost:3000/api/positions/${imei}`)
            .map(res => res.json());
    }

    getAllPositions() {
        return this.http.get('http://localhost:3000/api/positions')
            .map(res => res.json());
    }

}