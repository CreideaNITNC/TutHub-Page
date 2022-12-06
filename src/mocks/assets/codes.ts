class SourceCode {
  constructor(
    private readonly filename: string,
    private readonly lines: { isDifference: boolean; line: string }[]
  ) {}

  public get code(): {
    filename: string;
    lines: { isDifference: boolean; line: string }[];
    code: string;
  } {
    return { filename: this.filename, lines: this.lines, code: this._code };
  }

  private get _code(): string {
    return this.lines.map((line) => line.line).join("\n");
  }
}

export const terminal_swift_version = new SourceCode("terminal.sh", [
  { isDifference: true, line: "swift --version" },
]);

export const terminal_install_vapor = new SourceCode("terminal.sh", [
  { isDifference: true, line: "brew update" },
  { isDifference: true, line: "brew install vapor" },
]);

export const terminal_vapor_version = new SourceCode("terminal.sh", [
  { isDifference: true, line: "vapor --version" },
]);

export const terminal_vapor_new = new SourceCode("terminal.sh", [
  { isDifference: true, line: "vapor new VaporTwitter" },
]);

export const terminal_open_xcode = new SourceCode("terminal.sh", [
  { isDifference: true, line: "cd VaporTwitter" },
  { isDifference: true, line: "open Package.swift" },
]);

export const terminal_warning_notice = new SourceCode("terminal.sh", [
  {
    isDifference: true,
    line: "[ WARNING ] No custom working directory set for this scheme, using ...",
  },
  {
    isDifference: true,
    line: "[ NOTICE ] Server starting on http://127.0.0.1:8080",
  },
]);

export const terminal_curl_it_works = new SourceCode("terminal.sh", [
  { isDifference: true, line: "curl http://127.0.0.1:8080" },
]);
