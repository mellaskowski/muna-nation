import type {
  ActionFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import {form} from '@tailwindcss/forms';
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import { createUser, getProfileByEmail } from "~/models/user.server";
import { validateEmail, validateName, validateUsername } from "~/utils";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as React from "react";

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    birthDate?: date;
  };
}

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export async function action({ request }: LoaderArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const birthDate = formData.get("birthDate");
  const country = formData.get("country");
  const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid." } },
      { status: 400 }
    );
  }

  // What if a user sends us a password through other means than our form?
  if (typeof password !== "string") {
    return json(
      { errors: { password: "Valid password is required." } },
      { status: 400 }
    );
  }

  // Enforce minimum password length
  if (password.length < 8) {
    return json<ActionData>(
      { errors: { password: "Password is too short." } },
      { status: 400 }
    );
  }

  // A user could potentially already exist within our system
  // and we should communicate that well
  const existingUser = await getProfileByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email." } },
      { status: 400 }
    );
  }

  const user = await createUser(email, password, username, firstName, lastName, birthDate);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;

  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const birthDateRef = React.useRef<HTMLInputElement>(null);
  const countryRef = React.useRef<HTMLInputElement>(null);


  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef?.current?.focus();
    }

    if (actionData?.errors?.password) {
      passwordRef?.current?.focus();
    }

    if (actionData?.errors?.firstName) {
      firstNameRef?.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
      <div>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> Are You a Number One Fan? </h1>
      </div>
        <Form className="space-y-6" method="post" noValidate>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
                {actionData?.errors?.username && (
                <span className="block pt-1 text-red-700" id="username-error">
                  {actionData?.errors?.username}
                </span>
                  )}
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="Stacy Gavin"
                    required
                    aria-invalid={actionData?.errors?.username ? true : undefined}
                    aria-describedby="username-error"
                    ref={usernameRef}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              <span className="block text-gray-700">Email Address</span>
              {actionData?.errors?.email && (
                <span className="block pt-1 text-red-700" id="email-error">
                  {actionData?.errors?.email}
                </span>
              )}
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="email"
              name="email"
              id="email"
              required
              aria-invalid={actionData?.errors?.email ? true : undefined}
              aria-describedby="email-error"
              ref={emailRef}
            />
          </div>
          <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  aria-invalid={actionData?.errors?.firstName ? true : undefined}
                  aria-describedby="firstName-error"
                  ref={firstNameRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>
          <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  autoComplete="given-name"
                  aria-invalid={actionData?.errors?.lastName ? true : undefined}
                  aria-describedby="lastName-error"
                  ref={lastNameRef}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="birthDate" className="block text-sm font-medium leading-6 text-gray-900">
                Birthday
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                id="birthDate"
                type="DatePicker"
                name="birthDate"
                aria-invalid={actionData?.errors?.birthDate ? true : undefined}
                aria-describedby="birthDate-error"
                ref={birthDateRef}
              />
            </LocalizationProvider>
          </div>
          <div className="sm:col-span-3">
            <label className="text-sm font-medium" htmlFor="password">
              <span className="block text-sm font-medium leading-6 text-gray-900">Password</span>
              <span className="block font-light text-gray-700">
                Must have at least 8 characters, one uppercase letter, one lowercase letter, and special character.
              </span>
              {actionData?.errors?.password && (
                <span className="pt-1 text-red-700" id="password-error">
                  {actionData?.errors?.password}
                </span>
              )}
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              autoComplete="new-password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              aria-describedby="password-error"
              ref={passwordRef}
            />
          </div>
          <button
            className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
            type="submit"
          >
            Create Account
          </button>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}