export const styles = {
  container: {
    display: "flex",
    gap: 10,
    flexDirection: ["column", "column", "column", "row"],
    overflow: "hidden",
    justifyContent: "center",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  imageblock: {
    width: 750,
    height: 400,
    maxW: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  image: {
    objectFit: "cover",
    w: "100%",
    height: "100%",
    borderRadius: 5,
  },
};
