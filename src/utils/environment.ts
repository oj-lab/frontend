export const getViteMode = () => import.meta.env.MODE;

export const isMock = () => getViteMode() === "mock";
export const isGhPages = () => getViteMode() === "gh-pages";
