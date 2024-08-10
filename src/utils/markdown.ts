/**
 * Wraps the given text in a markdown code block
 * @param language - The language of the code block
 * @param code - The code to be displayed
 */
export function getCodeBlock(
  language: string | undefined,
  code: string,
): string {
  language = language || "text";
  language = language.toLowerCase();

  let content = `\`\`\`${language}\n${code}\n\`\`\``;
  console.log(content);
  return content;
}
