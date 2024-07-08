import Image from "next/image";

const FeatureCard = () => {
    return (


        <div className="  text-white flex flex-col md:flex-row justify-between items-center  gap-10  ">
            <div className="hover:backdrop-blur-xl hover:bg-white/10 w-full transition-all duration-500 hover:scale-105 text-center p-4 backdrop-blur-sm bg-white/20   min-h-80 flex flex-col items-center justify-center  ">
                <Image className="mx-auto w-32 h-32" src={'/upgrade.png'} width={100} height={100} alt="Upgrade" />
                <h3 className="text-xl my-3 md:text-2xl">Upgrade Skills & Knowledge</h3>
                <p>Learing Latest Skill that required with curren career requirement</p>
            </div>
            <div className="text-center hover:backdrop-blur-xl hover:bg-white/10 w-full transition-all duration-500 hover:scale-105 p-4 backdrop-blur-sm bg-white/20  min-h-80 flex flex-col items-center justify-center ">
                <Image className="mx-auto w-32 h-32" src={'/course-reco.png'} width={100} height={100} alt="Upgrade" />
                <h3 className="text-xl my-3 md:text-2xl">Course <br /> Recomendation</h3>
                <p>As Programming course recomendation based your interest</p>
            </div>
            <div className="text-center hover:backdrop-blur-xl hover:bg-white/10 w-full transition-all duration-500 hover:scale-105 p-4 backdrop-blur-sm bg-white/20  min-h-80 flex flex-col items-center justify-center ">
                <Image className="mx-auto w-32 h-32" src={'/dashboardpng.png'} width={100} height={100} alt="Upgrade" />
                <h3 className="text-xl my-3 md:text-2xl">Manage From Dashboard</h3>
                <p>Manage your certificate and Enrollment courses on simple platform</p>
            </div>
        </div>

    )
}
export default FeatureCard;