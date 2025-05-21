
export const inputVariants = {
    default: "px-3 py-2 rounded-sm border bg-white border-gray-300  text-black focus:outline-none focus:ring-2 focus:ring-blue-500",
    underlined: "px-3 py-2 border-b-2 border-white hover:outline focus:bg-white focus:text-black focus:outline-none focus:ring-0",
}

export type InputVariant = keyof typeof inputVariants;