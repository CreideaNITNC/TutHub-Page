export default interface TutorialPageJSON {
  userID: string;
  repositoryName: string;
  /** 章番号 */
  pageNumber: number;
  /** 章タイトル */
  pageTitle: string;
  commits: {
    /** その章の最初から1から連番 */
    step: number;
    /** commit message, 解説 */
    message: string;
    /** ソースコード 要素数0〜複数 */
    codes: {
      filename: string;
      /** 各行のdiffがあるか */
      lines: {
        isDifference: boolean;
        line: string;
      }[];
      /** ソースファイルの中身全て */
      code: string;
    }[];
    /** 画像 要素数0〜複数 */
    images: {
      filename: string;
      /** base64でエンコードされた画像データ */
      encodedBinaryData: string;
    }[];
  }[];

  /** 次の章の概要。その章が最終である場合はundefined */
  next?: {
    /** 解説 */
    message: string;
    /** 画像があれば、1つだけbase64でエンコードされた画像データ */
    encodedBinaryImageData?: string;
  };
}
