export const accountRoutes = {
    path: "account",
    children: [
      {
        path: "",
        redirect: "/settings/account/profile",
      },
      {
        path: "profile",
        name: "settings-account-profile",
        component: () =>
          import("/@/views/settings/account/ProfileView.vue"),
      },
      {
        path: "security-access",
        name: "settings-account-security-access",
        component: () =>
          import("/@/views/settings/account/SecurityAccessView.vue"),
      },
      {
        path: "notifications",
        name: "settings-account-notifications",
        component: () =>
          import("/@/views/settings/account/NotificationsView.vue"),
      },
    ],
  };