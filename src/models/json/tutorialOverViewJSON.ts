export default interface TutorialOverViewJSON {
  /** 解説 */
  message: string;
  /** 画像があれば、1つだけbase64でエンコードされた画像データ */
  encodedBinaryImageData?: string;
}
