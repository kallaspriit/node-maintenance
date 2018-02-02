import * as stripIndent from "strip-indent";

type ConcatenatableItem = string | number;

type Concatenatable = ConcatenatableItem | ConcatenatableItem[];

// tslint:disable-next-line:no-any
export default function html(
  template: TemplateStringsArray,
  ...expressions: Concatenatable[]
): string {
  const result = template.reduce((accumulator, part, i) => {
    const rawValue = expressions[i - 1]; // this might be an array
    const stringValue = Array.isArray(rawValue)
      ? rawValue.join("\n")
      : rawValue;

    return `${accumulator}${stringValue}${part}`;
  });

  return stripIndent(result).trim();
}
