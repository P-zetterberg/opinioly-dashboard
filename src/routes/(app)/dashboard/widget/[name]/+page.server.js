/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
  try {
    const response = await fetch(
      `http://localhost:3000/dashboard/list-feedback?dashboardId=${locals.userData.dashboardId}&name=${params.name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    let res = await response.json()
    console.log(res)
    return {
      widget: {
        name: params.name,
        data: res,
      },
    }
  } catch (error) {}
}
