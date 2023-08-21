import { CountryCardItemType } from "../ViewAllCountryCards.types";
import styles from "./CountryCardItem.module.scss";

export const CountryCardItem = ({ name, flags, capital, region, population }: CountryCardItemType) => {
  return (
    <div className={styles.cardContainer}>
      <img src={flags.svg} className={styles.flagCard} />
      <div className={styles.cardContainerText}>
        <div className={styles.countryName}>{name.common}</div>
        <div>Capital: {capital}</div>
        <div>Region: {region}</div>
        <div>Population: {population}</div>
      </div>
    </div>
  )
}
