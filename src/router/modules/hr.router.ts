import MainLayout from "../../layouts/MainLayout.vue";

export const hrRoutes = {
    path: "/hr",
    component: MainLayout,
    name: "hr",
    redirect: "/hr/users",
    meta: { name: "main" },
    children: [
        {
            path: 'users',
            name: 'users',
            component: () => import('/@/views/hr/UsersView.vue'),
            meta: {
                title: 'Мои сотрудники',
                desc: "Добро пожаловать Азиз!"
            }
        },
    ],
};
