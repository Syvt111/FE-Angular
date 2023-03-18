import {Component, OnInit} from '@angular/core';
import {BusService} from "../../../service/bus.service";
import {LocationService} from "../../../service/location.service";
import {BusTypeService} from "../../../service/bus-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BusType} from "../../../model/bus-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "../../../model/location";
import Swal from "sweetalert2";

@Component({
  selector: 'app-bus-update',
  templateUrl: './bus-update.component.html',
  styleUrls: ['./bus-update.component.css']
})
export class BusUpdateComponent implements OnInit {
  private id: number;
  locations: Location[] = [];
  busTypes: BusType[] = [];
  busForm: FormGroup;

  constructor(private busService: BusService,
              private locationService: LocationService,
              private busTypeService: BusTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.getBusUpdate(this.id);
    });
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

  update(id: number) {

    this.busService.editBus(id, this.busForm.value).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigateByUrl("bus/list")
    });
  }

  private getBusUpdate(id: number) {
    this.busService.findById(id).subscribe(item => {
      this.busForm = new FormGroup({
        id: new FormControl(item.id, Validators.required),
        busType: new FormControl(this.busTypes.find(c => c.id === item.busType.id), [Validators.required]),
        companyName: new FormControl(item.company, [Validators.required]),
        departure: new FormControl(this.locations.find(a => a.name === item.departureLocation.name), Validators.required),
        destination: new FormControl(this.locations.find(b => b.name === item.arrivalLocation.name), Validators.required),
        phoneNumber: new FormControl(item.phoneNumber, [Validators.required,
          Validators.pattern('^((090)[0-9]{7}|(093)[0-9]{7}|(097)[0-9]{7})$')]),
        email: new FormControl(item.email, [Validators.required, Validators.email]),
        departureTime: new FormControl(item.departureTime, [Validators.required]),
        arrivalTime: new FormControl(item.arrivalTime, [Validators.required])
      });
    });
  }
}
