import { Navbar } from "../Components/Navbar"

export const Dashborad = () => {
    return (
        <>
        <Navbar />
        <div className="dashboard-bg h-180 w-full z-0 relative text-gray-300">
            <div className="absolute text-6xl left-18 top-52"
            style={{ fontFamily: "Zalando" }}>
                Tailored Hair Artistory <br />
                <p className="text-8xl">
                    WE CARE FOR <br /> YOUR HAIRS
                </p>
                <p className="text-3xl">
                    Designer Haircuts, Hair Extensions, & Color Experts
                </p>
                <div>
                    <div className="flex gap-8 mt-4 ml-4">
                <div className="border text-xl broder-gray-600 p-4 hover:cursor-pointer hover:bg-black hover:text-fuchsia-700 hover:border-0">
                    Book Appointment 
                </div>
                
                </div>
                </div>
                
            </div>
           
            
        </div>
        </>
    )
}