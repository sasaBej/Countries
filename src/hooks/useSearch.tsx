import { useContext } from 'react';
import { NavigationPageContext } from '../pages/navigationPage/NavigationPage.store';
import { ViewAllCountryCardsContext } from '../pages/viewAllCountryCards/ViewAllCountryCards.store';
import { CountryCardItemType } from '../pages/viewAllCountryCards/ViewAllCountryCards.types';

export const useSearch = () => {
  const { inputValue } = useContext(NavigationPageContext);
  const { viewAllCountryCards } = useContext(ViewAllCountryCardsContext);

  const alphabeticalFilter = viewAllCountryCards?.slice().sort((a: CountryCardItemType, b: CountryCardItemType) => {
    return a.name.common.localeCompare(b.name.common)
  });

  let filtersResult: CountryCardItemType[] = [];

  if (inputValue.length > 1) {
    const filterByName = alphabeticalFilter?.filter(item => {
      return item?.name?.common.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    }) ?? [];

    const filterByCapital = alphabeticalFilter?.filter(item => {
      return item?.capital.toLocaleString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    }) ?? [];

    // cca2 code is used for this filter
    const filterByCode = alphabeticalFilter?.filter(item => {
      return item?.cca2?.toLocaleString().toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    }) ?? [];

    filtersResult = [...filterByCapital, ...filterByName, ...filterByCode];
  } else {
    filtersResult = alphabeticalFilter || [];
  }

  const noticeMessage = filtersResult.length === 0 && inputValue.length > 1
    ? 'No results found.'
    : '';

  return { filtersResult, noticeMessage };
};