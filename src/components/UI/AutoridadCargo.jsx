export default function AutoridadCargo({autoridad, cargo}){
    return(
        <div className="text-black">
            <h3 style={{fontWeight:"700", fontSize:"20px"}}>{autoridad}</h3>
            {
                cargo.map( item => (
                    <h3 className="text-violeta" style={{fontWeight:"400", fontSize:"20px"}} >{item}</h3>
                ))
            }
        </div>
    )
}