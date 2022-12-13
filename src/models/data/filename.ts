export default class Filename {
  public constructor(public readonly filename: string) {}

  private readonly extension = (): string => {
    const separated = this.filename.split(".");
    if (separated.length <= 1) return "";
    return separated[separated.length - 1];
  };

  get language(): string {
    switch (this.extension()) {
      case "css":
        return "css";
      case "sh":
        return "bash";
      case "js":
        return "javascript";
      case "basic":
        return "basic";
      case "c":
        return "c";
      case "cs":
        return "csharp";
      case "cpp":
        return "cpp";
      case "sass":
        return "sass";
      case "scss":
        return "scss";
      case "dart":
        return "dart";
      case "go":
        return "go";
      case "hs":
        return "haskell";
      case "java":
        return "java";
      case "json":
        return "json";
      case "kt":
        return "kotlin";
      case "lua":
        return "lua";
      case "md":
        return "markdown";
      case "tex":
        return "latex";
      case "nim":
        return "nim";
      case "perl":
        return "perl";
      case "php":
        return "php";
      case "sql":
        return "sql";
      case "py":
        return "python";
      case "tsx":
        return "tsx";
      case "jsx":
        return "jsx";
      case "rs":
        return "rust";
      case "ruby":
        return "ruby";
      case "scala":
        return "scala";
      case "swift":
        return "swift";
      case "ts":
        return "typescript";
      case "yaml":
        return "yaml";
      case "yml":
        return "yaml";
      default:
        return "javascript";
    }
  }
}
