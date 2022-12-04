import type { Service } from "@/service/service";

class DevelopService implements Service {
  loadData(): string {
    return "hello";
  }
}

export const developService = new DevelopService();
