import type TutorialOverViewJSON from "@/models/json/tutorialOverViewJSON";

export default class TutorialOverviewData {
  constructor(
    public readonly message: string,
    private readonly encodedBinaryImageData?: string
  ) {}

  public static readonly decode = (
    json: TutorialOverViewJSON
  ): TutorialOverviewData => {
    return new TutorialOverviewData(
      json.message,
      json.encodedBinaryPictureData
    );
  };
}
