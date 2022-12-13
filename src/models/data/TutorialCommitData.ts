import SourceCodeData from "@/models/data/sourceCodeData";
import PictureData from "@/models/data/pictureData";
import DescriptionData from "@/models/data/descriptionData";
import type TutorialCommitJSON from "@/models/json/tutorialCommitJSON";

export default class TutorialCommitData {
  public constructor(
    public readonly step: number,
    public readonly descriptions: DescriptionData[],
    public readonly codes: SourceCodeData[],
    public readonly pictures: PictureData[]
  ) {}

  public static readonly decode = (
    commit: TutorialCommitJSON
  ): TutorialCommitData => {
    return new TutorialCommitData(
      commit.step,
      DescriptionData.decode(commit.message),
      commit.codes.map((code) => SourceCodeData.decode(code)),
      commit.pictures.map((image) => PictureData.decode(image))
    );
  };
}
