export function Btnservices(){
    return(
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full">
        Servicios
        </button>
    );
}

export function BtnUs(){
    return (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full">
        Sobre nosostros
        </button>
    );
}

export function Btncontact(){
    return(
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded-full">
        Contacto
        </button>
    );
}

export function Logo(){
    return(
        <div className="w-full h-25 flex items-center">
        {/* Imagen del logo */}
        <img
          style={{ width: "8rem", height: "auto" }}
          src="/images/logoP.png"
          alt="Logo Insoel"
        />
  
        {/* Estilos del Texto del logo */}
        <span className="text-xl font-bold text-gray-800"></span>
      </div>
    );
}


export default function Navbar(){
    return(
        <section className="bg-gray-300 w-full">
        <div className="flex items-center justify-between max-w-[75rem] mx-auto px-[.12rem]">
          {/* Logo a la izquierda */}
          <div className="h-[6.3125rem] w-auto">
            <Logo />
          </div>
  
          {/* Botones a la derecha */}
          <div className="flex gap-[1.25rem]">
            <Btnservices />
            <BtnUs />
            <Btncontact />
          </div>
        </div>
      </section>
    );
}