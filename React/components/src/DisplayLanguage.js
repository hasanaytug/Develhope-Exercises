import React, { Component } from "react";
import LanguageContext from "./LanguageContext";

const dict = {
  en: "Hello",
  tr: "Merhaba",
};

export class DisplayLanguage extends Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>{dict[language]}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default DisplayLanguage;
