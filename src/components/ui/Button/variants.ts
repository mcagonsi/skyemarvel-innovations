const transition = "transition duration-300 ease-in-out";
const text_styling = "text-[16px] font-semibold py-2 px-4 text-nowrap";

export const buttonVariants = {

    primary_filled: "bg-[#00CCFF] text-white hover:bg-[#07ADD6] " + transition + text_styling,
    primary_outlined: "bg-transparent border border-[#00CCFF] text-[#00CCFF] hover:text-white hover:bg-[#07ADD6]  " + transition + text_styling,
    primary_text: "text-[#00CCFF] hover:text-white hover:bg-[#00CCFF]  " + transition + text_styling,
    secondary_filled: "bg-[#F62378] text-white hover:bg-[#A40041] " + transition + text_styling,
    secondary_outlined: "bg-transparent border border-[#F62378] text-[#F62378] hover:bg-[#F62378] hover:text-white " + transition + text_styling,
    secondary_text: "bg-transparent hover:bg-[#F62378] hover:text-white text-[#F62378] " + transition + text_styling,
    

}

export type ButtonVariant = keyof typeof buttonVariants;


