import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export class NavigationPageStore {
  public navbarHeight: number = 0;

  public inputValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public setNavbarHeight = (value: number) => this.navbarHeight = value;

  public setInputValue = (value: string) => this.inputValue = value;
 
}

export const navigationPageStore = new NavigationPageStore();
export const NavigationPageContext = createContext(navigationPageStore)
