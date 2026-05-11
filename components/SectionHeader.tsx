interface SectionHeaderProps {
  pillText?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeader = ({
  pillText,
  title,
  subtitle,
  className = "text-center mb-16",
  titleClassName = "text-4xl font-bold text-gradient mb-4",
  subtitleClassName = "text-xl text-accent-600 max-w-3xl mx-auto",
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      {pillText && (
        <div className="text-center mb-6">
          <span className="px-6 py-3 bg-gradient-to-r from-primary-100 via-indigo-100 to-purple-100 text-primary-700 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
            {pillText}
          </span>
        </div>
      )}
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;

