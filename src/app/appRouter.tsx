import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { LoginPage } from "@/pages/login";
import { RegistrationPage } from "@/pages/registration";
import ErrorPage from "@/pages/error";
import { lazy, Suspense } from "react";
import Loader from "@/shared/ui/Loader/Loader";

const QuestionsPage = lazy(() => import("@/pages/main/ui/MainPage"));
const QuestionPage = lazy(() => import("@/pages/question/ui/QuestionPage"));

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <QuestionsPage />
          </Suspense>
        ),
      },
      {
        path: "/question/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <QuestionPage />
          </Suspense>
        ),
      },
      { path: "*", element: <ErrorPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/registration", element: <RegistrationPage /> },
    ],
  },
]);
