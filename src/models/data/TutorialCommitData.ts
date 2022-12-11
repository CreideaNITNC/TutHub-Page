import SourceCodeData from "@/models/data/sourceCodeData";
import ImageData from "@/models/data/imageData";
import DescriptionData from "@/models/data/descriptionData";
import type TutorialCommitJSON from "@/models/json/tutorialCommitJSON";

export default class TutorialCommitData {
  public constructor(
    public readonly step: number,
    private readonly descriptions: DescriptionData[],
    private readonly codes: SourceCodeData[],
    private readonly images: ImageData[]
  ) {}

  public static readonly decode = (
    commit: TutorialCommitJSON
  ): TutorialCommitData => {
    return new TutorialCommitData(
      commit.step,
      DescriptionData.decode(commit.message),
      commit.codes.map((code) => SourceCodeData.decode(code)),
      commit.images.map((image) => ImageData.decode(image))
    );
  };
}
