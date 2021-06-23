import _, { take } from "lodash";
export function pagination(productArray, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(productArray).slice(startIndex).take(pageSize).value();
}
