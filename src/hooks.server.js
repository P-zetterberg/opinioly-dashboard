import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public"
import { createServerClient } from "@supabase/ssr"
import { redirect } from "@sveltejs/kit"

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key) => event.cookies.get(key),
        set: (key, value, options) => {
          event.cookies.set(key, value, options)
        },
        remove: (key, options) => {
          event.cookies.delete(key, options)
        },
      },
    }
  )

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  const isAuth = await event.locals.getSession()

  if (event.route.id.startsWith("/(app)")) {
    //get user data from DB
    if (isAuth) {
      const response = await fetch(
        `http://localhost:3000/auth/get/${isAuth?.user?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      let res = (await response.json()) ?? []

      event.locals.userData = res
    }
    if (!isAuth) {
      throw redirect(303, "/")
    }
  }

  return await resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range"
    },
  })
}
