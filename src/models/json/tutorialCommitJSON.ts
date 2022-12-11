import type SourceCodeJSON from "@/models/json/sourceCodeJSON";
import type PictureJSON from "@/models/json/pictureJSON";

export default interface TutorialCommitJSON {
  /** その章の最初から1から連番 */
  step: number;
  /** commit message, 解説 */
  message: string;
  /** ソースコード 要素数0〜複数 */
  codes: SourceCodeJSON[];
  /** 画像 要素数0〜複数 */
  pictures: PictureJSON[];
}
