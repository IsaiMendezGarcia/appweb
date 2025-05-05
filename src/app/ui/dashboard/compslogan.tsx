export function Button({ children, ariaLabel }) {
    return (
      <button 
        style={{
          fontFamily: 'var(--font-montserrat)', 
          fontWeight: 400 // tamaños a usar 300, 400, 700, 900
        }}
        className="bg-amber-400 text-darktext-100 py-2 px-4 rounded-full"
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }


export default function Slogan(){
return(
        <div className="bg-footernav-100 flex flex-col items-center text-center py-20 w-full">
         <div className="h-16 w-32rem bg-footernav-100 flex-row">
            <p className="text-blue-950 text-2xl underline font-montserrat font-semibold ">Materializamos tus ideas</p>
                <div className="my-2"></div> 
                    <p className="text-black text-4xl uppercase font-bold font-montserrat">Automatización y control</p>
                <div className="my-3"></div>

        </div>
        </div>
    );
}

