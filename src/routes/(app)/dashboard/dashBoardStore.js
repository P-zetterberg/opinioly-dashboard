import { writable } from "svelte/store"

export const widgetData = writable({
  data: [
    {
      id: 0,
      msg: "Vi på x AB värnar om våra kunder. feedback hjälper oss göra det ännu bättre!",
      type: "description",
      name: "Description / Text",
    },
    {
      id: 1,
      type: "dropdown",
      name: "Dropdown",
      label: "Feedback category12",
      options: ["Design", "Experience", "Products", "Other"],
      required: false,
    },
    {
      id: 2,
      type: "textinput",
      name: "Input",
      label: "Name",
      required: false,
      placeholder: "Enter your name",
    },
    {
      id: 3,
      type: "textarea",
      name: "Textarea",
      label: "Feedback",
      required: false,
    },
  ],
  mainTitle: "Give feedback12",
  buttonText: "Submit12",
  toggleText: "Feedback",
})

export const colorData = writable({})
export const widget = writable()

export function updateDataItemKey(index, key, newValue, element) {
  widgetData.update((currentData) => {
    const newDataArray = [...currentData.data]
    let item = newDataArray.find((i) => i.id === index)

    item[key] = newValue
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

export function updateArrayOrder(orderArr, element) {
  widgetData.update((currentData) => {
    const sortedData = orderArr.map((index) =>
      currentData.data.find((item) => item.id == index)
    )
    element.refreshData(JSON.stringify({ data: sortedData }), 2)
    return { ...currentData, data: sortedData }
  })
}
export function addVar(key, value) {
  colorData.update((oldValue) => {
    // Create a new object with the existing values and the new key-value pair

    const newValue = { ...oldValue, [key]: value }

    return newValue
  })
}
