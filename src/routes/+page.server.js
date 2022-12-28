import { redirect } from "@sveltejs/kit"

export function load({ cookies }) {
  if (!cookies.session)
    throw redirect(308, "/login")
}