const transition = "transition duration-50 ease-in-out";
const text_styling = "text-[16px] font-semibold py-2 px-4 w-container";


export const linkVariants = {
    primary_filled: "bg-[#00CCFF] text-white hover:bg-[#07ADD6] " + transition + text_styling,
    primary_outlined: "bg-transparent border border-[#00CCFF] text-[#00CCFF] hover:text-white hover:bg-[#07ADD6]  " + transition + text_styling,
    primary_text: "bg-none hover:text-[#00CCFF]  " + transition + text_styling,
    secondary_filled: "bg-[#F62378] text-white hover:bg-[#A40041] " + transition + text_styling,
    secondary_outlined: "bg-transparent border border-[#F62378] text-[#F62378] hover:bg-[#F62378] hover:text-white " + transition + text_styling,
    secondary_text: "bg-transparent text-white hover:text-[#F62378] " + transition + text_styling,
    pill_primary: "bg-blue text-white hover:bg-blue-500 " + transition + text_styling,
    pill_secondary: "bg-red text-white hover:bg-red-500 " + transition + text_styling,

}

export type LinkVariant = keyof typeof linkVariants;