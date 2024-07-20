export const workspaceRoutes = {
    path: "workspace",
    children: [
      {
        path: "",
        redirect: "/settings/workspace/general",
      },
      {
        path: "general",
        name: "workspace-workspace-general",
        component: () =>
          import("/@/views/settings/workspace/general/GeneralView.vue"),
      },
      {
        path: "members",
        name: "settings-workspace-members",
        component: () =>
          import("/@/views/settings/workspace/members/MembersView.vue"),
      },
      {
        path: "projects",
        name: "settings-workspace-projects",
        component: () =>
          import("/@/views/settings/workspace/projects/ProjectsView.vue"),
      },
      {
        path: "labels",
        name: "settings-workspace-labels",
        component: () =>
          import("/@/views/settings/workspace/labels/LabelsView.vue"),
      },
      {
        path: "plans",
        name: "settings-workspace-plans",
        component: () =>
          import("/@/views/settings/workspace/plans/PlansView.vue"),
      },
      {
        path: "billing",
        name: "settings-workspace-billing",
        component: () =>
          import("/@/views/settings/workspace/billing/BillingView.vue"),
      },
      {
        path: "import-export",
        name: "settings-workspace-import-export",
        component: () =>
          import("/@/views/settings/workspace/import-export/ImportExportView.vue"),
      },
      {
        path: "goals",
        name: "settings-workspace-goals",
        component: () =>
          import("/@/views/settings/workspace/goals/GoalsView.vue"),
      },
    ],
  };