import { MainPage } from "@/pages/main";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { QuestionPage } from "@/pages/question";
import ErrorPage from "@/pages/error";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/question/:id", element: <QuestionPage /> },
      { path: "*", element: <ErrorPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/registration", element: <RegistrationPage /> },
    ],
  },
]);
