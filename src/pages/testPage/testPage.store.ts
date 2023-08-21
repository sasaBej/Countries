import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export class TestPageStore {
  public result: number[] = [];

  public error: string = "";

  constructor() {
    makeAutoObservable(this);
  }


  public setError = (value: string) =>  this.error = value;

  public setResult = (value: number) => this.result.push(value); 


}

export const testPageStore = new TestPageStore();
export const TestPageContext = createContext(testPageStore);