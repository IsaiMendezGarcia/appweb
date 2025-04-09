import LogoCarousel from "./LogoCarousel";

export default function Colaboradores(){
    return(
        <div className="bg-footernav-100 w-full h-80 flex items-center flex-col">
            <div className="h-full w-full">
                <p className="text-darktext-100 uppercase text-4xl text-center pt-10 font-medium">Instituciones que colaboran con nosostros</p>
                <LogoCarousel />
            </div>
        </div>
    );
}