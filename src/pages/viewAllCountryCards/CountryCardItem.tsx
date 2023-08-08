import { CountryCardItemType } from "./ViewAllCountryCards.types"

export const CountryCardItem = ({ name, flags, capital, region, population }: CountryCardItemType) => {
  return (
    <>
      <div>{name.common}</div>
      <div>{flags.svg}</div>
      <div>{capital}</div>
      <div>{region}</div>
      <div>{population}</div>
    </>
  )
}
