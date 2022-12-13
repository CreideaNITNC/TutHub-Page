import type PictureJSON from "@/models/json/pictureJSON";

export default class PictureData {
  private constructor(
    public readonly filename: string,
    private readonly encodedBinaryData: string
  ) {}

  get src(): string {
    return "data:image/png;base64," + this.encodedBinaryData;
  }

  public static readonly decode = (json: PictureJSON): PictureData => {
    return new PictureData(json.filename, json.encodedBinaryData);
  };
}
