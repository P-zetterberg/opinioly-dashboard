export let elementsData = {
  textarea: {
    id: null,
    type: "textarea",
    name: "Textarea",
    label: "Feedback",
    required: false,
  },
  input: {
    id: null,
    type: "textinput",
    name: "Input",
    label: "Name",
    required: false,
    placeholder: "Enter your name",
  },
  description: {
    id: null,
    msg: "Vi på x AB värnar om våra kunder. feedback hjälper oss göra det ännu bättre!",
    type: "description",
    name: "Description / Text",
  },
  dropdown: {
    id: null,
    type: "dropdown",
    name: "Dropdown",
    label: "Feedback added",
    options: ["Design", "Experience", "Products", "Other"],
    required: false,
  },
}
