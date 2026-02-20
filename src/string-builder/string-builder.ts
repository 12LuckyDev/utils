/**
 * Class that allows to build strings with chaining methods
 */
export class StringBuilder {
  private readonly lines: (string | number)[] = [];

  constructor(...text: (string | number)[]) {
    this.lines.push(...text);
  }

  public append(...text: (string | number)[]): this {
    this.lines.push(...text);
    return this;
  }

  public appendLine(...text: (string | number)[]): this {
    this.lines.push(...text, '\n');
    return this;
  }

  public toString(): string {
    return this.lines.join('');
  }
}
