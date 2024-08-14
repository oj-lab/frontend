import { Md5 } from "ts-md5";

export function getGravatarUrl(email: string, size: number = 200) {
  if (!email) {
    return `https://www.gravatar.com/avatar/?d=identicon&s=${size}`;
  }
  var md5 = new Md5();
  var hash = md5.appendStr(email).end()?.toString();
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=${size}`;
}

export function getAvatarURLWithFallback(email: string, avatarUrl?: string) {
  return avatarUrl ? avatarUrl : getGravatarUrl(email);
}
