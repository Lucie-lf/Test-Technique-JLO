import ThemeParameter from '../components/ThemeParameter.tsx'

export default function Done() {
    return (
      <div className="flex flex-row justify-around items-start gap-15">
            <div className="flex flex-col -ml-5 -mt-10 gap-3">
                <div className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px]  p-3 hover:opacity-80">
                    <div className="bg-[#1beb94] w-6 h-6 rounded-[30px] shadow-md">
                    </div>
                    <div className="bg-[#A3FE50] w-6 h-6 rounded-[30px] shadow-md">
                    </div>
                </div>

                <div className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px] p-3 hover:opacity-80">
                    <div className="bg-[#eb1ba6] w-6 h-6 rounded-[30px]">
                    </div>
                    <div className="bg-[#383228] w-6 h-6 rounded-[30px]">
                    </div>
                </div>
            </div>

            <div className="w-full min-h-72 flex flex-col p-10 gap-5 mt-5 rounded-[40px] bg-indigo-800 border-[#A3FE50] border-x-1 border-t-1 border-b-2">
                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-indigo-950 border-b-indigo-950 bg-indigo-950 hover:bg-transparent">
                  </div>
                  <div className="card">
                    etendre linge
                  </div>
                  <div className="card">
                    Date
                  </div>
                </div>

                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-indigo-950 border-b-indigo-950 bg-indigo-950 hover:bg-transparent">
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