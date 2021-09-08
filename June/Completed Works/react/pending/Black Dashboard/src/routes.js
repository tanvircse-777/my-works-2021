/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Program from "views/Program.js";
import Profile from "views/Profile.js";
import SupportiveProfile from "views/SupportiveProfile.js";
import CurrentModule from "views/CurrentModule.js";
import LatestOutcome from "views/LatestOutcome.js";
import OpenHourCredits from "views/OpenHourCredits.js";
import ActivityTimeline from "views/ActivityTimeline.js";



const routes = [
  
  {
    path: "/dashboard",
    name: "Program",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Program,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "الحاجيات",
    icon: "tim-icons icon-single-02",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/supportiveprofile",
    name: "Supportive Profile",
    rtlName: "الرسوم البيانية",
    icon: "tim-icons icon-support-17",
    component: SupportiveProfile,
    layout: "/admin",
  },
  {
    path: "/currentmodule",
    name: "Current Module",
    rtlName: "التقويم",
    icon: "tim-icons icon-app",
    component: CurrentModule,
    layout: "/admin",
  },
  {
    path: "/latestoutcome",
    name: "Latest Outcome",
    rtlName: "التقويم",
    icon: "tim-icons icon-satisfied",
    component: LatestOutcome,
    layout: "/admin",
  },
  {
    path: "/openhourcredits",
    name: "Open Hour Credits",
    rtlName: "التقويم",
    icon: "tim-icons icon-refresh-02",
    component: OpenHourCredits,
    layout: "/admin",
  },
  {
    path: "/activitytimeline",
    name: "Activity Timeline",
    rtlName: "التقويم",
    icon: "tim-icons icon-user-run",
    component: ActivityTimeline,
    layout: "/admin",
  },
  
  /*{
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Pricing,
        layout: "/auth",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: Rtl,
        layout: "/rtl",
      },
      {
        path: "/timeline",
        name: "Timeline",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/login",
        name: "Login",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Login,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: Register,
        layout: "/auth",
      },
      {
        path: "/lock-screen",
        name: "Lock Screen",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: Lock,
        layout: "/auth",
      },
      {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: User,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "انهيار متعدد المستويات",
        mini: "MLT",
        rtlMini: "ر",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "وصفت",
            mini: "B",
            rtlMini: "ب",
            component: Buttons,
            layout: "/admin",
          },
        ],
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: Grid,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: Panels,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: SweetAlert,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        mini: "N",
        rtlMini: "ن",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        mini: "I",
        rtlMini: "و",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        mini: "T",
        rtlMini: "ر",
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "إستمارات",
    icon: "tim-icons icon-notes",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: ValidationForms,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin",
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: ExtendedTables,
        layout: "/admin",
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "خرائط جوجل",
        mini: "GM",
        rtlMini: "زم",
        component: GoogleMaps,
        layout: "/admin",
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        rtlName: "خريطة كاملة الشاشة",
        mini: "FSM",
        rtlMini: "ووم",
        component: FullScreenMap,
        layout: "/admin",
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        rtlName: "خريطة المتجه",
        mini: "VM",
        rtlMini: "تم",
        component: VectorMap,
        layout: "/admin",
      },
    ],
  },
  */
];

export default routes;
