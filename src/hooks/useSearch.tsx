import { useContext } from 'react';
import { NavigationPageContext } from '../pages/navigationPage/NavigationPage.store';
import { ViewAllCountryCardsContext } from '../pages/viewAllCountryCards/ViewAllCountryCards.store';

export const useSearch = () => {
  const { inputValue } = useContext(NavigationPageContext);
  const { viewAllCountryCards } = useContext(ViewAllCountryCardsContext);

  const filterItems = viewAllCountryCards?.filter(item => {
    return item?.name?.common.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  });

  return { filterItems };
};