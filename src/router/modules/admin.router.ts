import MainLayout from "../../layouts/MainLayout.vue";

export const adminRoutes = {
    path: "/admin",
    component: MainLayout,
    name: "main",
    redirect: "/admin/home",
    meta: { name: "main" },
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import('/@/views/admin/DashboardView.vue'),
            meta: {
                title: 'Главная',
                desc: "Добро пожаловать Азиз!",
            },
        },
        {
            path: 'customer-base',
            name: 'customer-base',
            component: () => import('/@/views/admin/CustomerBaseView.vue'),
            meta: {
                title: 'Клиентская база',
                desc: "Управление клиентской базой и их уровнем доступов",
            },
        },
        {
            path: 'catalog',
            name: 'catalog',
            component: () => import('/@/views/admin/CatalogView.vue'),
            meta: {
                title: 'Каталог',
                desc: "Управление каталогом мерчантов и их продукцией",
            },
        },
        {
            path: 'team-building',
            name: 'team-building',
            component: () => import('/@/views/admin/TeamBuildingView.vue'),
            meta: {
                title: 'Тимбилдинги',
                desc: "Управление каталогом мерчантов и их продукцией",
            },
        },
    ],
};
