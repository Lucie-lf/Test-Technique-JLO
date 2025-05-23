import ThemeMenu from "../components/theme/ThemeButton"

export default function ToDo({isDeployed, options}) {
    return (
        <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu isDeployed={isDeployed} options={options}/>

        <div className="w-full flex flex-col p-10 justify-center  mt-5 rounded-[40px] border-[#A3FE50] border-x-1 border-t-1 border-b-2">
            <div className="card flex flex-row items-center justify-between hover:line-through hover:bg-[#d9d9d920] p-3 rounded-xl text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d90]">
                </div>
                <div className="card">
                    finir vaisselle linge
                </div>
                <div className="card">
                    Date
                </div>
            </div>
                
            <div className="card flex flex-row items-center justify-between hover:line-through hover:bg-[#d9d9d920] p-3 rounded-xl text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d90]">
                </div>
                <div className="card">
                    finir vaisselle linge
                </div>
                <div className="card">
                    Date
                </div>
            </div>
            <div className="card flex flex-row items-center justify-between hover:line-through hover:bg-[#d9d9d920] p-3 rounded-xl text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d90]">
                </div>
                <div className="card">
                    finir vaisselle linge
                </div>
                <div className="card">
                    Date
                </div>
            </div>
            </div>
        </div>
      )
}