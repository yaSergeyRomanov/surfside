export const getStrapiUrl = (path: string) => {
  return `${process.env.BASE_URL || "http://localhost:1337"}${path}`;
};
