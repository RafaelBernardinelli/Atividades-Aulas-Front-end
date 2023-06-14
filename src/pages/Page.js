import Card from "../components/Card";

const Page = () => {
  return (
    <>
      <div>Header</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "gray",
        }}
      >
        <Card />
      </div>
    </>
  );
};

export default Page;
