import type SourceCodeJSON from "@/models/json/sourceCodeJSON";
import Filename from "@/models/data/filename";

export default class SourceCodeData {
  public constructor(
    public readonly filename: Filename,
    public readonly code: string
  ) {}

  public static readonly decode = (code: SourceCodeJSON): SourceCodeData => {
    return new SourceCodeData(new Filename(code.filename), code.code);
  };
}
