import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Position } from '../../../Position';
import { AgmMap } from '@agm/core';
import { LatLngBounds } from '@agm/core';

@Component({
  moduleId: module.id,
  selector: 'positions',
  templateUrl: 'positions.component.html'
})
export class PositionsComponent { 

  public positions: Position[];
  public latitude: number;
  public longitude: number;
  public zoom: number;

  @Input() device: number;
  @ViewChild(AgmMap) agmMap: AgmMap;
  
  constructor(private deviceService:DeviceService) {
    this.latitude = -33.45694;
    this.longitude = -70.64827;
    this.zoom = 9;
  }

  ngOnChanges() {
    if(this.device) {
      this.deviceService.getPositionsByIMEI(this.device)
        .subscribe(positions => {
          this.positions = positions;
          this.centerMap();
        });
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  private centerMap() {       
    var X = 0.0, Y = 0.0, Z = 0.0;

    for (let pos of this.positions) {
        let lat = pos.latitude * Math.PI / 180;
        let lon = pos.longitude * Math.PI / 180;

        let a = Math.cos(lat) * Math.cos(lon);
        let b = Math.cos(lat) * Math.sin(lon);
        let c = Math.sin(lat);

        X += a; Y += b; Z += c;
    }

    X /= this.positions.length; Y /= this.positions.length; Z /= this.positions.length;

    let lon = Math.atan2(Y, X);
    let hyp = Math.sqrt(X * X + Y * Y);
    let lat = Math.atan2(Z, hyp);

    this.latitude = (lat * 180 / Math.PI);
    this.longitude = (lon * 180 / Math.PI);
  }

}
