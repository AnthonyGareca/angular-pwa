export class RouteItem {

  private label: string;
  private route: string;

  constructor(label: string, route: string) {
    this.label = label;
    this.route = route;
  }

  getLabel() {
    return this.label;
  }

  getRoute() {
    return this.route;
  }
}