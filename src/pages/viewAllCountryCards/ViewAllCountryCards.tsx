import { observer } from "mobx-react-lite"
import { ViewAllCountryCardsContext } from "./ViewAllCountryCards.store";
import { useContext, useEffect } from "react";
import { CountryCardItem } from "./countryCardItem/CountryCardItem";
import styles from "./ViewAllCountryCards.module.scss"
import { NavigationPageContext } from "../navigationPage/NavigationPage.store";

export const ViewAllCountryCards = observer(() => {
  const {
    fetchAllCards,
    sortedAlphabetical, listOfCountryNames
  } = useContext(ViewAllCountryCardsContext);

  const { navbarHeight } = useContext(NavigationPageContext);
  console.log(listOfCountryNames)
  useEffect(() => {
    fetchAllCards()
  }, [fetchAllCards]);

  return (
    <div className={styles.viewAllCardsContainer} style={{
      marginTop: `${navbarHeight}px`
    }}>
      {
        sortedAlphabetical?.map((card, index) => (
          <CountryCardItem key={index} {...card} />
        ))
      }
    </div>
  )
})

