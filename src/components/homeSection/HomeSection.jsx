import Section from "../section/Section";
import "./HomeSection.scss";
import { SectionContent } from "../section/Section";

const HomeSection = ({ className, contentClassName, bgImage, children }) => {
  return (
    <Section className={className}>
      <SectionContent bgImage={bgImage} className={contentClassName}>
        {children}
      </SectionContent>
    </Section>
  );
};

export default HomeSection;
