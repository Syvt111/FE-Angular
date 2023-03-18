import {BusType} from "./bus-type";
import {Location} from "./location";

export interface Bus {
  id?: number;
  busNumber?: number;
  busType?: BusType;
  company?: string;
  departureLocation?: Location;
  arrivalLocation?: Location;
  phoneNumber?: string;
  email?: string;
  arrivalTime?: string;
  departureTime?: string;
}
