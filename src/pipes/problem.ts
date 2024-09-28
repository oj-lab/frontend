// Remove the first H1 title from the markdown content
export const TrimMarkdownTitlePipe = (content: string): string => {
  return content.replace(/^# .*\n/, "");
};
