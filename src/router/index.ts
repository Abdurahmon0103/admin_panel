import { createRouter, createWebHistory } from "vue-router";
const lazyLoad = (componentPath: string): (() => Promise<any>) => {
  return () => import(`../views/${componentPath}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "!text-white bg-indigo-500 ",
  routes: [
    { path: "/", redirect: "/DataTable" },
    {
      path: "/Mahsulotlar",
      name: "Mahsulotlar",
      component: lazyLoad("Mahsulotlar"),
    },
    {
      path: "/Mijozlar",
      name: "Mijozlar",
      component: lazyLoad("Mijozlar"),
    },
    {
      path: "/Foydalanuvchilar",
      name: "Foydalanuvchilar",
      component: lazyLoad("Foydalanuvchilar"),
    },
    {
      path: "/StandartOlchov",
      name: "Standart O'lchov",
      component: lazyLoad("StandartOlchov"),
    },
    {
      path: "/Valyutalar",
      name: "Valyutalar",
      component: lazyLoad("Valyutalar"),
    },
    {
      path: "/Kategoriyalar",
      name: "Kategoriyalar",
      component: lazyLoad("Kategoriyalar"),
    },
    {
      path: "/Taminotchilar",
      name: "Taminotchilar",
      component: lazyLoad("Taminotchilar"),
    },
    {
      path: "/Omborlar",
      name: "Omborlar",
      component: lazyLoad("Omborlar"),
    },
    {
      path: "/Settings",
      name: "Settings",
      component: lazyLoad("Settings"),
    },
    {
      path: "/DataTable",
      name: "Hisobotlar",
      component: lazyLoad("DataTable"),
    },
    {
      path: "/LogIn",
      name: "LogIn",
      component: lazyLoad("LogIn"),
    },
  ],
});

export default router;
