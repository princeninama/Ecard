
const Map = ({data}) =>{


    return(
        <>
            <div className="h-screen bg-gradient-to-b from-white via-lime-100 via-green-200 via-emerald-300 via-teal-400 to-cyan-400">
                {data.map_url}
            </div>
        </>
    )
}

export default Map