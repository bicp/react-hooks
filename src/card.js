export function Card({ children }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid gray",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      {children}
    </div>
  );
}
