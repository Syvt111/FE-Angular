import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BusService} from "../../../service/bus.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LocationService} from "../../../service/location.service";
import {BusTypeService} from "../../../service/bus-type.service";
import {BusType} from "../../../model/bus-type";
import {Location} from "../../../model/location";

import Swal from "sweetalert2";

@Component({
  selector: 'app-bus-craete',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  locations: Location[]=[];
  busTypes: BusType[]=[];
  busForm: FormGroup = new FormGroup({
    busNumber: new FormControl('', [Validators.required]),
    busType: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    departureLocation: new FormControl('', [Validators.required]),
    arrivalLocation: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern('^((090)[0-9]{7}|(093)[0-9]{7}|(097)[0-9]{7})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    departureTime: new FormControl('', [Validators.required]),
    arrivalTime: new FormControl('', [Validators.required])
  });


  constructor(private busService: BusService,
              private locationService: LocationService,
              private busTypeService: BusTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllLocation();
    this.getAllBusType();
  }

  private getAllLocation() {
    this.locationService.getAll().subscribe(locations => {
     // @ts-ignore
      this.locations = locations;
    });

  }

  private getAllBusType() {
    this.busTypeService.getAll().subscribe(busTypes => {
      this.busTypes = busTypes;
    });

  }

  create() {
    const bus = this.busForm.value;
    this.busService.saveBus(bus).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigateByUrl("bus/list")
    })
  }
}
