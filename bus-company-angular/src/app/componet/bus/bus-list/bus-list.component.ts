import {Component, OnInit} from '@angular/core';
import {Bus} from "../../../model/bus";
import {BusService} from "../../../service/bus.service";
import {ActivatedRoute} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: Bus[];
  id: number;
  temp: Bus = {};

  constructor(private busService: BusService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllBus();
  }

  private getAllBus() {
    this.busService.getAll().subscribe(buses => {
      this.buses = buses;
    });
  }

  delete(id: number) {
    if (id !== 0) {
      this.busService.deleteBus(this.temp.id).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.getAllBus();
      });
    }

  }
}
