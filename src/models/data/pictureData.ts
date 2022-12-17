import type PictureJSON from "@/models/json/pictureJSON";
import Filename from "@/models/data/filename";

export default class PictureData {
  private constructor(
    public readonly filename: string,
    private readonly encodedBinaryData: string
  ) {}

  get src(): string {
    const filename = new Filename(this.filename);
    return (
      `data:image/${filename.extension()};base64,` + this.encodedBinaryData
    );
  }

  public static readonly decode = (json: PictureJSON): PictureData => {
    return new PictureData(json.filename, json.encodedBinaryData);
  };
}
