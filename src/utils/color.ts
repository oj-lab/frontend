export function getBadgeColorClasses(status: string): string {
  switch (status) {
    case "Accepted":
      return "badge-success";
    case "WrongAnswer":
      return "badge-error";
    case "CompileError":
      return "badge-warning";
    case "pending":
      return "badge-primary";
    case "running":
      return "badge-secondary";
    default:
      return "";
  }
}
