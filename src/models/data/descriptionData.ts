export default class DescriptionData {
  private constructor(
    public readonly title: string,
    public readonly text: string
  ) {}

  public static readonly decode = (message: string): DescriptionData[] => {
    let title: string | undefined;
    let lines: string[] = [];
    const descriptions = [];
    for (const line of message.split("\n")) {
      if (line.substring(0, 2) === "# ") {
        const nextTitle = line.substring(2);
        if (title === undefined && lines.length === 0) {
          title = nextTitle;
          continue;
        }
        descriptions.push(new DescriptionData(title ?? "", lines.join("\n")));
        title = nextTitle;
        lines = [];
        continue;
      }
      lines.push(line);
    }
    descriptions.push(new DescriptionData(title ?? "", lines.join("\n")));
    return descriptions;
  };
}
