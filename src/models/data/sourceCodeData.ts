import { SourceLineData } from "@/models/data/sourceLineData";
import type SourceCodeJSON from "@/models/json/sourceCodeJSON";
import Filename from "@/models/data/filename";

export default class SourceCodeData {
  public constructor(
    public readonly filename: Filename,
    private readonly lines: SourceLineData[],
    public readonly code: string
  ) {}

  public static readonly decode = (code: SourceCodeJSON): SourceCodeData => {
    return new SourceCodeData(
      new Filename(code.filename),
      code.lines.map((line) => SourceLineData.decode(line)),
      code.code
    );
  };
}
