import { TranslateContainer, Ul, TranslateButton } from "../headerStyles";
import { useTranslation } from "react-i18next";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../../store/theme/themeSlice";


export const RightNav = ({ open }) => {
  const dispatch = useDispatch()
  const {theme} = useSelector((state) => state.themeMode)
  const  {t, i18n}  = useTranslation("global");
  const [themeChanged, setThemeChanged] = useState(theme)
  console.log(themeChanged, "cha")


  const changePosition = () => {
    setThemeChanged(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      dispatch(changeTheme(newTheme));
      return newTheme;
    });
  };

console.log(theme, "theme")

  return (
    <>
      <Ul open={open}>
        <li> {t("nav.home")} </li>
        <li> {t("nav.series")} </li>
        <li> {t("nav.films")} </li>
        <li> {t("nav.people")} </li>
        <TranslateContainer>
          <TranslateButton onClick={() => i18n.changeLanguage("es")}>
            ES
          </TranslateButton>
          <p>|</p>
          <TranslateButton onClick={() => i18n.changeLanguage("en")}>
            EN
          </TranslateButton>
        </TranslateContainer>
        <div>
          <button onClick={changePosition}  >
          {themeChanged === "light" ? <MoonIcon/> :  <SunIcon/> }
            </button>
         
        
        </div>
      </Ul>
    </>
  );
};
