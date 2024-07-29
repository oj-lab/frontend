import { Md5 } from "ts-md5";

export function getGravatarUrl(email: string, size: number = 200) {
  var md5 = new Md5();
  var hash = md5.appendStr(email).end()?.toString();
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=${size}`;
}
