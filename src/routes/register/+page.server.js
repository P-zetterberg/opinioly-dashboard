import { AuthApiError } from "@supabase/supabase-js"
import { fail } from "@sveltejs/kit"
import { redirect } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    })

    if (response.ok) {
      const { data, error: err } =
        await locals.supabase.auth.signInWithPassword({
          email: body.email,
          password: body.password,
        })

      if (err) {
        if (err instanceof AuthApiError && err.status == 400) {
          throw redirect(303, "/login")
        }
      }
      throw redirect(303, "/dashboard")
    }
  },
}
