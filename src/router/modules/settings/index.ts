import SettingsLayout from "/@/layouts/SettingsLayout.vue";
import { accountRoutes } from "./account.router";
import { teamsRoutes } from "./teams.router";
import { workspaceRoutes } from "./workspace.router";

export const settingsRoutes = {
  path: "/settings",
  name: "settings",
  component: SettingsLayout,
  children: [
    {
      path: "",
      redirect: "/settings/managment",
    },
    accountRoutes,
    teamsRoutes,
    workspaceRoutes
  ],
};