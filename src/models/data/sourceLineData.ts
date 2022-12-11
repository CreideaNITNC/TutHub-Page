import type LineJSON from "@/models/json/sourceLineJSON";

export class SourceLineData {
  public constructor(
    public readonly isDifference: boolean,
    public readonly line: string
  ) {}

  public static readonly decode = (line: LineJSON) => {
    return new SourceLineData(line.isDifference, line.line);
  };
}
