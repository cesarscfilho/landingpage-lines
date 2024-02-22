import React from "react"

export const Section = ({children}: {children: React.ReactNode}) => {
    return (
        <section className="border-neutral-800 border-b px-[3%]">
            <div className="border-neutral-800 border-x max-w-6xl mx-auto relative">
                <LineDot.leftBottom />
                <LineDot.rightBottom />
                {children}
            </div>
        </section>
    )
}

export const LineDot = {
    leftBottom: () => (
        <div className="w-2.5 h-2.5 bg-black absolute border border-neutral-800 right-auto top-auto -bottom-[5px] -left-[5px] z-10" />
    ),
    rightBottom: () => (
        <div className="w-2.5 h-2.5 bg-black absolute border border-neutral-800 left-auto top-auto -bottom-[5px] -right-[5px] z-10" />
    ),
    leftTop: () => (
        <div className="w-2.5 h-2.5 bg-black absolute border border-neutral-800 right-auto bottom-auto -top-[5px] -left-[5px] z-10" />
    ),
    rightTop: () => (
        <div className="w-2.5 h-2.5 bg-black absolute border border-neutral-800 left-auto bottom-auto -top-[5px] -right-[5px] z-10" />
    ),
}

