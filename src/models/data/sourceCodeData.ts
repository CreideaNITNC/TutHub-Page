import type LineJSON from "@/models/json/sourceLineJSON";
import { SourceLineData } from "@/models/data/sourceLineData";
import type SourceCodeJSON from "@/models/json/sourceCodeJSON";

export default class SourceCodeData {
  public constructor(
    public readonly filename: string,
    private readonly lines: SourceLineData[],
    public readonly code: string
  ) {}

  public static readonly decode = (code: SourceCodeJSON): SourceCodeData => {
    return new SourceCodeData(
      code.filename,
      code.lines.map((line) => SourceLineData.decode(line)),
      code.code
    );
  };
}
