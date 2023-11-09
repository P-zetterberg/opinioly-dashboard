export async function load({ params }) {
  const response = await fetch("http://localhost:3000/widget/ping", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  let res = await response.json()
  if (response.ok) {
    return {
      data: res,
    }
  }
}
