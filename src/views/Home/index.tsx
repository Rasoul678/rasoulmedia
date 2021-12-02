interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          height: "20vh",
        }}
      >
        Home
      </h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <h1
          key={i}
          style={{
            textAlign: "center",
            height: "10vh",
          }}
        >
          Rasoul Media
        </h1>
      ))}
    </>
  );
};

export default Home;
