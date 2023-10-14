import { useContext, useEffect, useRef } from "react";
import { NavigationPageContext } from "./NavigationPage.store";
import { observer } from "mobx-react-lite";
import styles from "./NavigationPage.module.scss";

const FILTER_LIST: string[] = ["region", "population range", "languages", "time zone", "currencies"];

const NavigationPage = observer(() => {

  const {
    setNavbarHeight,
    setInputValue,
    inputValue
  } = useContext(NavigationPageContext);

  const refNavbar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refNavbar.current) {
      setNavbarHeight(refNavbar.current.clientHeight);
    }

  }, [setNavbarHeight, refNavbar])

  return (
    <div ref={refNavbar} className={styles.navBar}>
      <input
        className={styles.searchInput}
        placeholder="Search for a country..."
        value={inputValue} onChange={event => setInputValue(event.target.value)}
        type="search" />
      <select name="Filters" id="filters">
        {FILTER_LIST.map(filterName => (
          <option value={filterName}>{filterName}</option>
        ))}
      </select>
    </div>
  )
})

export default NavigationPage;