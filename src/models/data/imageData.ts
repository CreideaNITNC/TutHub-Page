import type ImageJSON from "@/models/json/imageJSON";

export default class ImageData {
  private constructor(
    public readonly filename: string,
    private readonly encodedBinaryData: string
  ) {}

  public static readonly decode = (json: ImageJSON): ImageData => {
    return new ImageData(json.filename, json.encodedBinaryData);
  };
}
