export function isCurrentPath(path: string) {
  return window.location.pathname === path;
}

export function isWindowPrefersSchemeDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
