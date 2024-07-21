export const teamsRoutes = {
    path: "teams",
    children: [
      {
        path: "",
        redirect: "/settings/teams/general",
      },
      {
        path: "general",
        name: "settings-teams-general",
        component: () =>
          import("/@/views/settings/teams/general/GeneralView.vue"),
      },
      {
        path: "members",
        name: "settings-teams-members",
        component: () =>
          import("/@/views/settings/teams/members/MembersView.vue"),
      },
      {
        path: "workflow",
        name: "settings-teams-workflow",
        component: () =>
          import("/@/views/settings/teams/workflow/WorkflowView.vue"),
      },
      {
        path: "triage",
        name: "settings-teams-triage",
        component: () =>
          import("/@/views/settings/teams/triage/TriageView.vue"),
      },
      {
        path: "labels",
        name: "settings-teams-labels",
        component: () =>
          import("/@/views/settings/teams/labels/LabelsView.vue"),
      },
      {
        path: "sprints",
        name: "settings-teams-sprints",
        component: () =>
          import("/@/views/settings/teams/sprints/SprintsView.vue"),
      },
      {
        path: "notifications",
        name: "settings-teams-notifications",
        component: () =>
          import("/@/views/settings/teams/notifications/NotificationsView.vue"),
      },
    ],
  };