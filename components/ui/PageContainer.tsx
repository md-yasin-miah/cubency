type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 lg:px-[50px] ${className}`}>
      {children}
    </div>
  );
}
