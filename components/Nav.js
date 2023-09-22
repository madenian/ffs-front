import { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";


function Nav() {
  const router = useRouter();

  const [showLinks, setShowLinks] = useState(false);
  const [showPres, setShowPres] = useState(true);

  // boutons ouverture du menu hamburger

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setShowPres(true);
    } else {
      setShowPres(false);
    }
  }, [router.pathname]);

  const isLinkActive = (pathname) => {
    return router.pathname === pathname ? styles.activeLink : "";
  };

  return (
    <div
      className={`${styles.navBar} ${
        showLinks ? styles.showNav : styles.hideNav
      }`}
    >
      <div className={styles.navBarLogo}>
        <Link href="/">
          <img src="./logo.png" alt="logo" className={styles.logoImg} />
        </Link>
      </div>

      <ul className={styles.navBarLinks}>
        <li
          className={`${styles.navBarItem} ${
            styles.slideInDown1
          } ${isLinkActive("/")}`}
        >
          <Link href="/">
            <span onClick={handleShowLinks}>Home</span>
          </Link>
        </li>
        <li
          className={`${styles.navBarItem} ${
            styles.slideInDown2
          } ${isLinkActive("/Esport")}`}
        >
          <Link href="/Esport">
            <span>E-sport</span>
          </Link>
        </li>
        <li
          className={`${styles.navBarItem} ${
            styles.slideInDown3
          } ${isLinkActive("/TopLive")}`}
        >
          <Link href="/TopLive">
            <span onClick={handleShowLinks}>Top Live</span>
          </Link>
        </li>
        {showPres ? (
          <>
            <li className={`${styles.navBarItem} ${styles.slideInDown4}`}>
              <ScrollLink to="presentation" smooth={true} duration={500}>
                <span onClick={handleShowLinks}>Présentation</span>
              </ScrollLink>
            </li>
            <li className={`${styles.navBarItem} ${styles.slideInDown5}`}>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <span onClick={handleShowLinks}>Contact</span>
              </ScrollLink>
            </li>
          </>
        ) : null}
      </ul>
          
      <button className={styles.navBarBurger} onClick={handleShowLinks}>
        <span className={styles.burgerLine}></span>
      </button>
    </div>
  );
}
export default Nav;
