export const getMode = () => import.meta.env.MODE;

export const isMock = () => getMode() === "mock";
export const isGhPages = () => getMode() === "gh-pages";
