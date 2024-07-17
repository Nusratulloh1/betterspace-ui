import MainLayout from "../../layouts/MainLayout.vue";

export const tryRoutes = {
    path: "/try",
    component: MainLayout,
    name: "try",
    meta: { name: "try" },
    children: [
        {
            path: 'notes',
            name: 'notes',
            component: () => import('/@/views/try/notes/NotesView.vue'),
            meta: {
                title: 'Notes',
                breadcrumb: [
                    {
                        title: 'Notes',
                        disabled: false,
                        name: 'notes',
                        icon: 'local-note'
                    }
                ]
            },
        },
    ],
};
