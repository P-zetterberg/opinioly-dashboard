import { writable } from "svelte/store"

export const widgetData = writable({
  data: [
    {
      msg: "Vi på x AB värnar om våra kunder. feedback hjälper oss göra det ännu bättre!",
      type: "description",
      name: "Description / Text",
    },
    {
      type: "dropdown",
      name: "Dropdown",
      label: "Feedback category12",
      options: ["Design", "Experience", "Products", "Other"],
      required: false,
    },
    {
      type: "textinput",
      name: "Input",
      label: "Name",
      required: false,
      placeholder: "Enter your name",
    },
    {
      type: "textarea",
      name: "Textarea",
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
