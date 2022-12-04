import type { Service } from "@/service/service";

class ProductionService implements Service {
  loadData(): string {
    return "world";
  }
}

export const productionService = new ProductionService();
