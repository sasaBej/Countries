import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { CountryCardItemType } from "./ViewAllCountryCards.types";
import { axiosInstance } from './../../api/AxiosInstace';

export class ViewAllCountryCardsStore {
  public viewAllCountryCards: CountryCardItemType[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setViewAllCountryCards = (value: CountryCardItemType[]) => this.viewAllCountryCards = value;

  public fetchAllCards = async () => {
    try {
      const countryCards = await axiosInstance.get('/all?fields=name,flags,capital,region,population');
      this.setViewAllCountryCards(countryCards.data);
      console.log(this.viewAllCountryCards)
    } catch (error) {
      console.error(error);
    }
  };

}

export const viewAllCountryCardsStore = new ViewAllCountryCardsStore();
export const ViewAllCountryCardsContext = createContext(viewAllCountryCardsStore)
