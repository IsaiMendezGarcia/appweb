import LogoCarousel from "./LogoCarousel";

export default function Colaboradores(){
    return(
        <div className="bg-footernav-100 w-full h-96 flex items-center flex-col">
            <div className="h-36 w-full">
                <p className="text-blue-950 uppercase text-4xl text-center pt-10 pb-6 font-medium">Instituciones que colaboran con nosostros</p>
            </div>
            <div className="p-5">
            <LogoCarousel />
            </div>
        </div>
    );
}