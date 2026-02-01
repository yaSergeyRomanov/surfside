export const getActiveLanguage = (langUrl: string, pathName: string) => {
  if (langUrl === "/") {
    return (
      pathName === "/" ||
      pathName === "" ||
      (!pathName.startsWith("/en") && !pathName.startsWith("/fr"))
    );
  }

  return pathName.startsWith(langUrl);
};
