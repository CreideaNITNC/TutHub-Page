class SourceCode {
  constructor(
    private readonly filename: string,
    private readonly lines: { isDifference: boolean; line: string }[]
  ) {}

  public get code(): {
    filename: string;
    lines: { isDifference: boolean; line: string }[];
    code: string;
  } {
    return { filename: this.filename, lines: this.lines, code: this._code };
  }

  private get _code(): string {
    return this.lines.map((line) => line.line).join("\n");
  }
}

export const terminal_swift_version = new SourceCode("terminal.sh", [
  { isDifference: true, line: "swift --version" },
]);

export const terminal_install_vapor = new SourceCode("terminal.sh", [
  { isDifference: true, line: "brew update" },
  { isDifference: true, line: "brew install vapor" },
]);

export const terminal_vapor_version = new SourceCode("terminal.sh", [
  { isDifference: true, line: "vapor --version" },
]);

export const terminal_vapor_new = new SourceCode("terminal.sh", [
  { isDifference: true, line: "vapor new VaporTwitter" },
]);

export const terminal_open_xcode = new SourceCode("terminal.sh", [
  { isDifference: true, line: "cd VaporTwitter" },
  { isDifference: true, line: "open Package.swift" },
]);

export const routes_swift = new SourceCode("route.swift", [
  { isDifference: true, line: "func route(_ app: Application) {" },
  { isDifference: true, line: "\tapp.get { req in" },
  { isDifference: true, line: '\t\t"Hello, World"' },
  { isDifference: true, line: "\t}" },
  { isDifference: true, line: "}" },
]);

export const terminal_warning_notice = new SourceCode("terminal.sh", [
  {
    isDifference: true,
    line: "[ WARNING ] No custom working directory set for this scheme, using ...",
  },
  {
    isDifference: true,
    line: "[ NOTICE ] Server starting on http://127.0.0.1:8080",
  },
]);

export const terminal_curl_it_works = new SourceCode("terminal.sh", [
  { isDifference: true, line: "curl http://127.0.0.1:8080" },
]);

export const long = {
  filename: "long.c",
  lines: [],
  code: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char name[100];
    char furi[100];
    int koku;
    int san;
    int rika;
    int shakai;
    int total;
} STUDENT;

void sort(STUDENT class[], int n) {
    /* 中身を作る */
}

int main(int argc, char **argv) {
    STUDENT class[50];
    FILE *fp;
    int i, j;
    if ((fp = fopen(argv[1], "r")) == NULL) {
        perror(argv[1]);
        exit(1);
    }

    i = 0;
    while (fscanf(
            fp, "%s%s%d%d%d%d",
            class[i].name,
            class[i].furi,
            &class[i].koku,
            &class[i].san,
            &class[i].rika,
            &class[i].shakai
    ) != EOF) {
        i++;
    }

    j = 0;
    while (j < i) {
        class[j].total = class[j].koku + class[j].san + class[j].rika + class[j].shakai;
        j++;
    }

    sort(class, i);
    printf(
            "%-10s %-25s %8s %8s %8s %8s %8s\\n",
            "氏名",
            "ふりがな",
            "国語",
            "算数",
            "理科",
            "社会",
            "合計"
    );

    j = 0;
    while (j < i) {
        printf(
                "%-10s %-30s %6d %6d %6d %6d %6d\\n",
                class[j].name,
                class[j].furi,
                class[j].koku,
                class[j].san,
                class[j].rika,
                class[j].shakai,
                class[j].total
        );
        j++;
    }
    return 0;
}`,
};
