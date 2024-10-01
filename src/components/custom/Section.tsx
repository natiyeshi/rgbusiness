export const Section = ({
  children,
  bg,
  h = true,
}: {
  children: any;
  bg: string;
  h?: boolean;
}) => {
  return (
    <section className={`${bg} ${h && "max-2xl:min-h-screen"} w-full flex`}>
      <div className="max-w-[1500px] w-full mx-auto px-12 max-lg:px-6 max-md:px-3">
        {children}
      </div>
    </section>
  );
};
