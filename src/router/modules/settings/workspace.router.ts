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
      meta: {
        title: 'Workspace general',
      },
    },
    {
      path: "members",
      name: "settings-workspace-members",
      component: () =>
        import("/@/views/settings/workspace/members/MembersView.vue"),
      meta: {
        title: 'Workspace members',
      },
    },
    {
      path: "projects",
      name: "settings-workspace-projects",
      component: () =>
        import("/@/views/settings/workspace/projects/ProjectsView.vue"),
      meta: {
        title: 'Workspace projects',
      },
    },
    {
      path: "labels",
      name: "settings-workspace-labels",
      component: () =>
        import("/@/views/settings/workspace/labels/LabelsView.vue"),
      meta: {
        title: 'Workspace labels',
      },
    },
    {
      path: "plans",
      name: "settings-workspace-plans",
      component: () =>
        import("/@/views/settings/workspace/plans/PlansView.vue"),
      meta: {
        title: 'Workspace plans',
      },
    },
    {
      path: "billing",
      name: "settings-workspace-billing",
      component: () =>
        import("/@/views/settings/workspace/billing/BillingView.vue"),
      meta: {
        title: 'Workspace billing',
      },
    },
    {
      path: "import-export",
      name: "settings-workspace-import-export",
      component: () =>
        import("/@/views/settings/workspace/import-export/ImportExportView.vue"),
      meta: {
        title: 'Workspace import&export',
      },
    },
    {
      path: "goals",
      name: "settings-workspace-goals",
      component: () =>
        import("/@/views/settings/workspace/goals/GoalsView.vue"),
      meta: {
        title: 'Workspace goals',
      },
    },
  ],
};