/**
 * @description
 * Join classes together, filtering out any falsey values.
 * This function can be especially useful
 * when you want to conditionally join classes together.
 * @example
 * joinClasses("button", disabled && "button--disabled")
 */
export function joinClasses(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
