import { Navbar } from "../Components/Navbar"

export const MemberList = () => {
    return (
        <div>
            <Navbar ></Navbar>
            <div className="absolute text-center text-black h-180 w-full">
                <h1 className="text-4xl mt-4"> 
                    Our Team
                </h1>
                <p className="text-2xl">
                    Lola Hair Studio is focused on bringing our guests the best of the <br />
                     best. We are hair obsessed and passionate about our services.
                </p>
            <div className="flex justify-around">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
            </div>
        </div>
    )
}

const MemberCard = () => {
return (
    <>
    <div className="w-[320px] h-100 border rounded-2xl">
    <div>
        <img src={'../'} alt="" />
    </div>
    </div>
    </>
)
}