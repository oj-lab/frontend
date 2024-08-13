export function shortenString(
  str: string,
  len: number,
  keepTail: boolean,
  noEllipsis?: boolean,
): string {
  noEllipsis = keepTail ? true : noEllipsis || false;
  if (str.length <= len) {
    return str;
  }

  let headLen = len;
  let tailLen = 0;
  if (keepTail) {
    headLen = Math.ceil(len / 2);
    tailLen = len - headLen;
  }
  let result = str.slice(0, headLen);
  if (!noEllipsis) {
    result += "...";
  }
  if (keepTail) {
    result += str.slice(-tailLen);
  }

  return result;
}
