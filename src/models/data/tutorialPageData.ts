import TutorialCommitData from "@/models/data/TutorialCommitData";
import TutorialOverviewData from "@/models/data/tutorialOverviewData";
import type TutorialPageJSON from "@/models/json/tutorialPageJSON";
import type TutorialOverViewJSON from "@/models/json/tutorialOverViewJSON";

export default class TutorialPageData {
  private constructor(
    public readonly userID: string,
    public readonly repositoryName: string,
    public readonly repositoryTitle: string,
    public readonly commits: readonly TutorialCommitData[],
    public readonly nextTutorialOverView?: TutorialOverviewData
  ) {}

  private static readonly decodeNext = (
    json?: TutorialOverViewJSON
  ): TutorialOverviewData | undefined => {
    return json === undefined ? undefined : TutorialOverviewData.decode(json);
  };
  public static readonly decode = (
    data: TutorialPageJSON
  ): TutorialPageData => {
    return new TutorialPageData(
      data.userID,
      data.repositoryName,
      data.repositoryTitle,
      data.commits.map((commit) => TutorialCommitData.decode(commit)),
      this.decodeNext(data.next)
    );
  };
}
