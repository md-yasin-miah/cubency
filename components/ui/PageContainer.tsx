type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-360 px-6 lg:px-12.5 ${className}`}>
      {children}
    </div>
  );
}
