export function getBadgeColorClasses(status: string): string {
  switch (status) {
    case "finished":
      return "badge-success";
    case "pending":
      return "badge-warning";
    case "wrong answer":
      return "badge-error";
    default:
      return "";
  }
}
