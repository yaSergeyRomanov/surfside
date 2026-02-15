export const getActiveLanguage = (langUrl: string, pathName: string) => {
  if (langUrl === "/") {
    return (
      pathName === "/" ||
      pathName === "" ||
      (!pathName.startsWith("/ru") && !pathName.startsWith("/fr"))
    );
  }

  return pathName.startsWith(langUrl);
};
