import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const dict = {
  en: "Hello",
  tr: "Merhaba",
};

function DisplayLanguage() {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{dict[language]}</h1>;
    </div>
  );
}

export default DisplayLanguage;
