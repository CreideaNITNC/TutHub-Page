import type LineJSON from "@/models/json/sourceLineJSON";

export default interface SourceCodeJSON {
  filename: string;
  lines: LineJSON[];
  code: string;
}
