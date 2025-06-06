import { homeData } from "../models/HomeModel";

export class HomeController {
  private static instance: HomeController;
  private data = homeData;

  private constructor() {}

  public static getInstance(): HomeController {
    if (!HomeController.instance) {
      HomeController.instance = new HomeController();
    }
    return HomeController.instance;
  }

  public getHomeData() {
    return this.data;
  }
} 