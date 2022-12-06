import type TutorialPageJSON from "@/models/json/tutorialPageJSON";
import * as image from "@/mocks/assets/base64_images";
import * as code from "@/mocks/assets/codes";

const mockTutorialPageJSON: TutorialPageJSON = {
  userID: "Tanaka",
  repositoryName: "Server-Side-Swift-Vapor",

  pageNumber: 1,

  pageTitle: "Vaporの環境構築",

  commits: [
    {
      step: 1,
      message: `# Vaporの環境構築
          本章では、Server-Side Swiftのフレームワーク、Vaporを使用するにあたってhomebrewでのVaporのインストールや環境構築を行なっていきます。
          # Vaporとは
          [Vapor]は今最も主力なServer-Side Swiftのフレームワークです。基本的な機能は網羅し、Documentも英語ですが、マイナーなサーバーサイドフレームワークの中ではかなりしっかりと整備されています。
          `,

      codes: [],
      images: [
        { filename: "vapor_logo.png", encodedBinaryData: image.vapor_logo },
      ],
    },
    {
      step: 2,
      message: `# Xcodeのインストール
      AppStoreやAppleのDevelopサイトからXcodeをインストールします。`,
      codes: [],
      images: [
        {
          filename: "appstore_xcode.png",
          encodedBinaryData: image.appstore_xcode,
        },
      ],
    },
    {
      step: 3,
      message: `# Swiftの確認
      XcodeをインストールしたらSwiftが使用可能であることを確認しておきます。
      ターミナルを開き、versionを確認するコマンドで確認してみてください。
      5.6辺りのバージョンがインストールされていると思います。`,
      codes: [code.terminal_swift_version.code],
      images: [
        {
          filename: "swift_version.png",
          encodedBinaryData: image.swift_version,
        },
      ],
    },
    {
      step: 4,
      message: `# Vaporのインストール
      Homebrewをインストールされていない方は[Homebrewの公式サイト](https://brew.sh/index_ja)に従ってインストールしてださい
      Homebrewを使用してvaporをインストールします。`,
      codes: [code.terminal_install_vapor.code],
      images: [],
    },
    {
      step: 5,
      message: `# Vaporの確認
      バージョンを見てVaporが無事インストールできたことを確認します。`,
      codes: [code.terminal_vapor_version.code],
      images: [
        {
          filename: "vapor_version.png",
          encodedBinaryData: image.vapor_version,
        },
      ],
    },
    {
      step: 6,
      message: `# プロジェクトの作成
      ターミナルにvaporのnewコマンドで、vaporプロジェクトを作成します。newの後にはプロジェクト名を入れます。`,
      codes: [code.terminal_vapor_new.code],
      images: [
        {
          filename: "vapor_new.png",
          encodedBinaryData: image.vapor_new,
        },
      ],
    },
    {
      step: 7,
      message: `# Xcodeで開く
      ターミナルの表示に従って、コマンドを打ってみます。
      # Xcodeの起動
      実行すると、Xcodeが起動し、プロジェクトが開かれると思います。
      開いた後は、依存ライブラリのダウンロードなどのため少々時間がかかると思います。`,
      codes: [code.terminal_open_xcode.code],
      images: [
        {
          filename: "open_xcode.png",
          encodedBinaryData: image.open_xcode,
        },
      ],
    },
    {
      step: 8,
      message: `# プロジェクトの実行
      Xcodeの左上の三角形のRunボタンを押します。するとbuildが始まって、しばらくするとBuild Succeedと表示が一瞬でます。その後、指紋マークが出るので指紋認証やパスワードで承認してください。`,
      codes: [],
      images: [
        {
          filename: "xcode_password_permission.png",
          encodedBinaryData: image.xcode_password_permission,
        },
      ],
    },
    {
      step: 9,
      message: `# サーバーの起動と確認
      実行して少し待つと左下にWarningとNoticeの表示が出ます。http://127.0.0.1:8080をSafariなどのブラウザで検索して見てください。
      It works!と表示されると思います。`,
      codes: [code.terminal_warning_notice.code],
      images: [
        {
          filename: "browser_it_works.png",
          encodedBinaryData: image.browser_it_works,
        },
      ],
    },
    {
      step: 10,
      message: `# ターミナルでのサーバーへのリクエスト
      ターミナルからサーバーが起動していることを確認することもできます。curlコマンドでリクエストを送ってみてください。It works!と表示が出ると思います。`,
      codes: [code.terminal_curl_it_works.code],
      images: [],
    },
    {
      step: 10,
      message: `# [Warning] No custom working directory set for this scheme
      実行時にXcode右下の欄にこの文字が出ていると思います。これは、実行ディレクトリが設定していないとのアラートです。デフォルトでは、Derivedなどの別のディレクトリから実行されるのですが、Vaporはファイル操作なども行うため、実行ディレクトリがプロジェクト直下じゃないと挙動に不具合が出る場合があります。
      
      # Edit schema
      Xcode上のVaporTwitterを押して、Edit Schemaを選択します。
      
      # Use custom working directory
      OptionのUse custom working directoryにチェックを入れてディレクトリをこのプロジェクトディレクトリ直下に指定します。`,
      codes: [code.terminal_curl_it_works.code],
      images: [
        {
          filename: "warning1.png",
          encodedBinaryData: image.warning1_edit_schema,
        },
        {
          filename: "warning2.png",
          encodedBinaryData: image.warning2_run_schema,
        },
        { filename: "warning3.png", encodedBinaryData: image.warning3_option },
        { filename: "warning4.png", encodedBinaryData: image.warning4_select },
        {
          filename: "warning5.png",
          encodedBinaryData: image.warning5_selected,
        },
      ],
    },
    {
      step: 11,
      message: `# Warningの解消の確認
      Xcodeの実行を止めて再実行するとWarningが消えていると思います。`,
      codes: [],
      images: [
        {
          filename: "without_warning_run_serve.png",
          encodedBinaryData: image.without_warning_run_serve,
        },
      ],
    },
  ],
};

export default mockTutorialPageJSON;