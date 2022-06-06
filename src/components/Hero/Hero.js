import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To
        <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>About my skills</SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://mail.google.com/mail/decemberandile@gmail.com")
        }
      >
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
