import { useContext, useEffect, useRef } from "react";
import { NavigationPageContext } from "./NavigationPage.store";
import { observer } from "mobx-react-lite";
import styles from "./NavigationPage.module.scss";

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
      <div>
        Search:
        <input value={inputValue} onChange={event => setInputValue(event.target.value)} type="search" />
      </div>
      {inputValue}
    </div>
  )
})

export default NavigationPage;