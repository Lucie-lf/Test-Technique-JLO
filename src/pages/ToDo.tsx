export default function ToDo() {
    return (
        <div className="flex flex-row justify-around items-start gap-15">
            <div className="flex flex-col -ml-5 -mt-10 gap-3">
                <div className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px]  p-3 hover:opacity-80">
                    <div className="bg-[#1beb94] w-6 h-6 rounded-[30px]">
                    </div>
                    <div className="bg-[#dda63f] w-6 h-6 rounded-[30px]">
                    </div>
                </div>

                <div className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px] p-3 hover:opacity-80">
                    <div className="bg-[#eb1ba6] w-6 h-6 rounded-[30px]">
                    </div>
                    <div className="bg-[#383228] w-6 h-6 rounded-[30px]">
                    </div>
                </div>
            </div>

        <div className="w-full flex flex-col p-10 justify-center  mt-5 rounded-[40px] border-[#A3FE50] border-x-1 border-t-1 border-b-2">
            <div className="card flex flex-row items-center justify-between line-through text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d980]">
                </div>
                <div className="card">
                    finir vaisselle linge
                </div>
                <div className="card">
                    Date
                </div>
                </div>
                
                <div className="card flex flex-row items-center justify-between line-through text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d980]">
                </div>
                <div className="card">
                    finir vaisselle linge
                </div>
                <div className="card">
                    Date
                </div>
                </div>
                <div className="card flex flex-row items-center justify-between line-through text-[#D9D9D9]">
                <div className="card h-4 w-4 border-1 rounded  border-b-[#D9D9D9] hover:bg-[#d9d9d980]">
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