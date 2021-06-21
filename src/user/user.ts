export class User {
  userID: string;
  favorites: string[];
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public email: string,
  ) {
    this.favorites = [];
  }
}
