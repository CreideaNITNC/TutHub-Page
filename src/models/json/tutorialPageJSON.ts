import type TutorialCommitJSON from "@/models/json/tutorialCommitJSON";
import type TutorialOverViewJSON from "@/models/json/tutorialOverViewJSON";

export default interface TutorialPageJSON {
  userID: string;
  repositoryName: string;
  /** 章番号 */
  pageNumber: number;
  /** 章タイトル */
  pageTitle: string;
  commits: TutorialCommitJSON[];

  /** 次の章の概要。その章が最終である場合はundefined */
  next?: TutorialOverViewJSON;
}
