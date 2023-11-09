import { writable } from "svelte/store"

export const widgetData = writable({
  data: [
    {
      msg: "Vi på x AB värnar om våra kunder. feedback hjälper oss göra det ännu bättre!",
      type: "description",
    },
    {
      type: "dropdown",
      label: "Feedback category12PZ",
      options: ["Design", "Experience", "Products", "Other"],
      required: true,
    },
    {
      type: "textinput",
      label: "Name",
      required: false,
      placeholder: "Enter your name",
    },
    {
      type: "textarea",
      label: "Feedback",
      required: false,
    },
  ],
  buttonText: "Submit",
})
export const widget = writable()

/**
 * @param {number} index
 * @param {string} key
 * @param {any} newValue
 * @param {any} element
 */
export function updateDataItemKey(index, key, newValue, element) {
  widgetData.update((currentData) => {
    const newDataArray = [...currentData.data]
    //@ts-ignore
    newDataArray[index][key] = newValue
    element.refreshData(JSON.stringify({ data: newDataArray }), 2)
    return { ...currentData, data: newDataArray }
  })
}
export function updateItem(key, newValue, element) {
  widgetData.update((currentData) => {
    element.refreshData({ ...currentData, [key]: newValue }, 1)
    return { ...currentData, [key]: newValue }
  })
}
