import ThemeParameter from '../components/theme/ThemeParameter.tsx'
import ThemeMenu from "../components/theme/ThemeButton.tsx"

export default function Done({isDeployed, options}) {
    return (
      <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu isDeployed={isDeployed} options={options} />

            <div className="w-full min-h-72 flex flex-col p-10 gap-5 mt-5 rounded-[40px] bg-[#282ea4] border-[#A3FE50] border-x-1 border-t-1 border-b-2">
                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-[#101242] border-b-[#101242] bg-[#101242] hover:bg-transparent">
                  </div>
                  <div className="card text-[#101242]">
                    etendre linge
                  </div>
                  <div className="card">
                    Date
                  </div>
                </div>

                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-[#101242] border-b-[#101242] bg-[#101242] hover:bg-transparent">
                  </div>
                  <div className="card text-[#101242]">
                    etendre linge
                  </div>
                  <div className="card">
                    Date
                  </div>
                </div>
            </div>
      </div>
    )
  }