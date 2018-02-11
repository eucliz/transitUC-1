import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Position } from '../../../Position';

@Component({
  moduleId: module.id,
  selector: 'devices',
  templateUrl: 'devices.component.html'
})
export class DevicesComponent { 
  devices: number[];
  selectedDevice: number;

  constructor(private deviceService:DeviceService) {
    this.deviceService.getDevices()
        .subscribe(devices => {
          this.devices = devices;
        });
  }

  onSelect(device: number): void {
    this.selectedDevice = device;
  }
}