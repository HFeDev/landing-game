import "./Section.scss";

const Section = ({ className, children }) => {
  return <div className={`section ${className}`}>{children}</div>;
};

export const SectionContent = ({ className, children, bgImage }) => {
  const BgImage = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
  return (
    <div style={BgImage} className={`section__content ${className}`}>
      {children}
    </div>
  );
};

export default Section;
