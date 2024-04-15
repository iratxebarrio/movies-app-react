import { TranslateContainer, Ul, TranslateButton } from "../headerStyles";
import { useTranslation } from "react-i18next";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, changeLanguage } from "../../../store/settings/settingsSlice";

export const RightNav = ({ open }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settings);
  const { t, i18n } = useTranslation("global");
  const currentLanguage = i18n.language;
  const [themeChanged, setThemeChanged] = useState(theme);

  const changeLanguageAndUpdateStorage = (language) => {
    //Change language
    i18n.changeLanguage(language); 
  };

  useEffect(() => {
    // Update localStorage
    localStorage.setItem(
      "settings",
      JSON.stringify({ theme: themeChanged, language: currentLanguage })
    );
  }, [themeChanged, currentLanguage]);



  // Cargar el tema desde el LocalStorage al inicializar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem("settings").theme;
    if (savedTheme) {
      dispatch(changeTheme(savedTheme));
      setThemeChanged(savedTheme);
    }
  }, [dispatch]);

  const changePosition = () => {
    setThemeChanged((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      dispatch(changeTheme(newTheme));
      return newTheme;
    });
  };

  return (
    <>
      <Ul open={open}>
        <li> {t("nav.home")} </li>
        <li> {t("nav.series")} </li>
        <li> {t("nav.films")} </li>
        <li> {t("nav.people")} </li>
        <TranslateContainer>
          <TranslateButton onClick={() => changeLanguageAndUpdateStorage("es")}>
            ES
          </TranslateButton>
          <p>|</p>
          <TranslateButton onClick={() => changeLanguageAndUpdateStorage("en")}>
            EN
          </TranslateButton>
        </TranslateContainer>
        <div>
          <button onClick={changePosition}>
            {themeChanged === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </Ul>
    </>
  );
};
