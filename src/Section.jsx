import React from 'react';
import {useLanguage} from "nexcomponent-ui";

const Section = () => {
  const {language} = useLanguage();
  return (
    <div>
      {language}
    </div>
  );
};

export default Section;