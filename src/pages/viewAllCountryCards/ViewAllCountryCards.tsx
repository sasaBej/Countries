import { observer } from "mobx-react-lite"
import { ViewAllCountryCardsContext } from "./ViewAllCountryCards.store";
import { useContext, useLayoutEffect } from "react";
import { CountryCardItem } from "./countryCardItem/CountryCardItem";
import styles from "./ViewAllCountryCards.module.scss"
import { NavigationPageContext } from "../navigationPage/NavigationPage.store";
import { useSearch } from "../../hooks/useSearch";

export const ViewAllCountryCards = observer(() => {
  const {
    fetchAllCards,
  } = useContext(ViewAllCountryCardsContext);


  const { filtersResult, noticeMessage } = useSearch();

  const { navbarHeight } = useContext(NavigationPageContext);

  useLayoutEffect(() => {
    fetchAllCards()
  }, [fetchAllCards]);

  return (
    <div className={styles.viewAllCardsContainer} style={{
      marginTop: `${navbarHeight}px`
    }}>
      {
        filtersResult?.map((card, index) => (
          <CountryCardItem key={index} {...card} />
        ))
      }
      {noticeMessage}
    </div>
  )
})

