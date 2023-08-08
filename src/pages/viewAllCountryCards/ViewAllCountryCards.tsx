import { observer } from "mobx-react-lite"
import { ViewAllCountryCardsContext } from "./ViewAllCountryCards.store";
import { useContext, useEffect } from "react";
import { CountryCardItem } from "./CountryCardItem";

export const ViewAllCountryCards = observer(() => {
  const {
    viewAllCountryCards,
    fetchAllCards
  } = useContext(ViewAllCountryCardsContext);

  useEffect(() => {
    fetchAllCards()
  }, [fetchAllCards])

  return (
    <>
      {
        viewAllCountryCards?.map((card, index) => (
          <CountryCardItem key={index} {...card} />
        ))
      }
    </>
  )
})

