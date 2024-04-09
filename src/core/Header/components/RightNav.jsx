import { TranslateContainer, Ul, TranslateButton } from "../headerStyles";
import { useTranslation } from "react-i18next";

export const RightNav = ({ open }) => {
  const  {t, i18n}  = useTranslation("global");

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
      </Ul>
    </>
  );
};
