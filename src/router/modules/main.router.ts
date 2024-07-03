import MainLayout from "../../layouts/MainLayout.vue";

export const mainRoutes = {
    path: "/",
    component: MainLayout,
    name: "main",
    meta: { name: "main" },
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import('/@/views/dashboard/DashboardView.vue'),
            meta: {
                title: 'Home',
                breadcrumb: [
                    {
                        title: 'Home',
                        disabled: false,
                        name: 'home',
                        icon: 'local-home'
                    }
                ]
            },
        },
        {
            path: '/inbox',
            name: 'inbox',
            component: () => import('/@/views/inbox/InboxView.vue'),
            meta: {
                title: 'Inbox',
                breadcrumb: [
                    {
                        title: 'Inbox',
                        disabled: false,
                        name: 'index',
                        icon: 'local-inbox'
                    }
                ]
            },
        },
        {
            path: '/issues',
            name: 'issues',
            component: () => import('/@/views/issues/IssuesView.vue'),
            meta: {
                title: 'My issues',
                breadcrumb: [
                    {
                        title: 'My issues',
                        disabled: false,
                        name: 'issues',
                        icon: 'local-issue'
                    }
                ]
            },
        },
        {
            path: '/focus',
            name: 'focus',
            component: () => import('/@/views/focus/FocusView.vue'),
            meta: {
                title: 'Focus',
                breadcrumb: [
                    {
                        title: 'Focus',
                        disabled: false,
                        name: 'focus',
                        icon: 'local-focus'
                    }
                ]
            },
        },
    ],
};
