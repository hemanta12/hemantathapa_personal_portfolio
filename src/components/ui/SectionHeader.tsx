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
          {label ? (
            <ScrollReveal delay={120}>
              <span className="section-label-inline">{label}</span>
            </ScrollReveal>
          ) : null}
        </div>
      </div>
    );
};

export default SectionHeader;
