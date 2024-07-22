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
      meta: {
        title: 'Teams general',
      },
    },
    {
      path: "members",
      name: "settings-teams-members",
      component: () =>
        import("/@/views/settings/teams/members/MembersView.vue"),
      meta: {
        title: 'Teams members',
      },
    },
    {
      path: "workflow",
      name: "settings-teams-workflow",
      component: () =>
        import("/@/views/settings/teams/workflow/WorkflowView.vue"),
      meta: {
        title: 'Teams workflow',
      },
    },
    {
      path: "triage",
      name: "settings-teams-triage",
      component: () =>
        import("/@/views/settings/teams/triage/TriageView.vue"),
      meta: {
        title: 'Teams triage',
      },
    },
    {
      path: "labels",
      name: "settings-teams-labels",
      component: () =>
        import("/@/views/settings/teams/labels/LabelsView.vue"),
      meta: {
        title: 'Teams labels',
      },
    },
    {
      path: "sprints",
      name: "settings-teams-sprints",
      component: () =>
        import("/@/views/settings/teams/sprints/SprintsView.vue"),
      meta: {
        title: 'Teams sprints',
      },
    },
    {
      path: "notifications",
      name: "settings-teams-notifications",
      component: () =>
        import("/@/views/settings/teams/notifications/NotificationsView.vue"),
      meta: {
        title: 'Teams notifications',
      },
    },
  ],
};