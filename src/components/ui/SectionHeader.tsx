import ScrollReveal from "./ScrollReveal";

type SectionHeaderProps = {
  title: string;
  em: string;
  label?: string;
};

const SectionHeader = ({
  title,
  em,
  label,
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className="section-header">
      <div className="section-header__title-wrap">
        <ScrollReveal>
          <h2 className="section-title">
            {title} <em>{em}</em>
          </h2>
        </ScrollReveal>
      </div>
      {label ? (
        <ScrollReveal delay={120}>
          <p className="section-label">{label}</p>
        </ScrollReveal>
      ) : null}
    </div>
  );
};

export default SectionHeader;
