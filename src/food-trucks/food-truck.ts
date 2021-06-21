import Location from '../Common/location';

export class FoodTruck {
  menuID: string;
  rating: number;
  truckID: string;
  location: Location;
  open: boolean;
  constructor(public name: string, public phone: string, public email: string) {
    this.menuID = '';
    this.rating = 100;
    this.truckID = '';
    this.location = new Location();
    this.open = false;
  }
}
