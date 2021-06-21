export default class Location {
  constructor(public lat?: string, public long?: string) {
    this.lat = lat ? lat : '';
    this.long = long ? long : '';
  }
}
