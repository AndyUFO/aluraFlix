function Container({ children }) {
  return (
    <section
      className={"flex flex-row text-center justify-around flex-wrap gap-2"}
    >
      {children}
    </section>
  );
}

export default Container;
