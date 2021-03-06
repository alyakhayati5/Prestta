import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/user-profile", title: "User Profile", icon: "person", class: "" },
  {
    path: "/table-list",
    title: "Missions",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/typography",
    title: "Les appels d'offre",
    icon: "library_books",
    class: "",
  },
  { path: "/icons", title: "Client", icon: "domain  ", class: "" },
  { path: "/maps", title: "Profile", icon: "apps ", class: "" },
  {
    path: "/notifications",
    title: "Candidatures",
    icon: "group",
    class: "",
  },
  {
    path: "/upgrade",
    title: "Déconnexion",
    icon: "logout",
    class: "active-pro",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
