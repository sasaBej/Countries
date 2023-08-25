import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { CountryCardItemType } from "./ViewAllCountryCards.types";
import { axiosInstance } from '../../api/AxiosInstance';

export class ViewAllCountryCardsStore {
  public viewAllCountryCards: CountryCardItemType[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setViewAllCountryCards = (value: CountryCardItemType[]) => this.viewAllCountryCards = value;

  // public get sortedAlphabetical() {
  //   if (this.viewAllCountryCards) {
  //     return this.viewAllCountryCards.slice().sort((a: CountryCardItemType, b: CountryCardItemType) =>
  //       a.name.common.localeCompare(b.name.common)
  //     );
  //   }
  //   return [];
  // }

  public fetchAllCards = async () => {
    try {
      const countryCards = await axiosInstance.get('/all?fields=name,flags,capital,region,population');
      this.setViewAllCountryCards(countryCards.data);
    } catch (error) {
      console.error(error);
    }
  };
}

export const viewAllCountryCardsStore = new ViewAllCountryCardsStore();
export const ViewAllCountryCardsContext = createContext(viewAllCountryCardsStore);
