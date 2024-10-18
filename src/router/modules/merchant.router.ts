import MainLayout from "../../layouts/MainLayout.vue";

export const merchantRoutes = {
    path: "/merchant",
    component: MainLayout,
    name: "merchant",
    redirect: "/merchant/customer-base",
    meta: { name: "merchant" },
    children: [
        {
            path: 'customer-base',
            name: 'merchant-customer-base',
            component: () => import('/@/views/merchant/CustomerBaseView.vue'),
            meta: {
                title: 'Клиентская база',
                desc: "Управление клиентской базой и их уровнем доступов",
            },
        },
    ],
};
