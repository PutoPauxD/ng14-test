import { Injectable } from '@angular/core';
import { availableUsers } from 'src/assets/json/login';
import { User, UserLogin } from '@interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private _loggedUser: User = {
    username: '',
    password: '',
    role: ''
  }

  public login(user: UserLogin) {
    const {username, password} = user;
    const foundUser = availableUsers.find((dbUser: UserLogin) => dbUser.password === password && dbUser.username === username);
    if (foundUser) {
      this.setLoggedUser(foundUser);
    }
  }

  public getLoggedUser(): User {
    return this._loggedUser;
  }

  public setLoggedUser(user: User): void {
    this._loggedUser = user;
  }
}
