import MainLayout from "../../layouts/MainLayout.vue";

export const workspaceRoutes = {
    path: "/workspace",
    component: MainLayout,
    name: "workspace",
    meta: { name: "workspace" },
    children: [
        {
            path: 'goals',
            name: 'goals',
            component: () => import('/@/views/workspace/goals/GoalsView.vue'),
            meta: {
                title: 'Goals',
                breadcrumb: [
                    {
                        title: 'Goals',
                        disabled: false,
                        name: 'goals',
                        icon: 'local-strike'
                    }
                ]
            },
        },
        {
            path: 'goals/:id',
            name: 'goals-detail',
            component: () => import('/@/views/workspace/goals/GoalView.vue'),
            meta: {
                title: 'Goals',
                breadcrumb: [
                    {
                        title: 'Goals',
                        disabled: false,
                        name: 'goals',
                        icon: 'local-strike'
                    },
                    {
                        title: 'GOAL1',
                        disabled: false,
                        name: 'goals-detail',
                        icon: 'local-stars'
                    }
                ]
            },
        },
        {
            path: 'teams',
            name: 'teams',
            component: () => import('/@/views/workspace/teams/TeamsView.vue'),
            meta: {
                title: 'Teams',
                breadcrumb: [
                    {
                        title: 'Teams',
                        disabled: false,
                        name: 'teams',
                        icon: 'local-cross'
                    }
                ]
            },
        },
    ],
};
