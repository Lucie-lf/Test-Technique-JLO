import { toast } from 'sonner';

type ThemeMenuProps = {
    isDeployed: boolean
}

const ThemeMenu = ({ isDeployed}: ThemeMenuProps) => {
    const setTheme = (color: "green" | "pink" | "blue" | "yellow") => {
    const html = document.documentElement;
    const themes = ["pink", "blue", "yellow", "green"];

    html.classList.remove(...themes);
    html.classList.add(color);
    };

    if (!isDeployed) {
        return null;
    }

    return (
        <div className="flex flex-col gap-3 -mt-10">
            <div 
                onClick={() => {
                console.log(`Selected theme: green`);
                setTheme("green");
                toast.success("Theme changed to green!");
                }}
                    className="cursor-pointer flex flex-row justify-start gap-3 bg-text rounded-full  p-3 hover:opacity-80">
                    <div className="green bg-primary w-6 h-6 rounded-full shadow" >
                    </div>
                    <div className="green bg-accent w-6 h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: pink`);
                setTheme("pink");
                toast.success("Theme changed to pink!");
                }}
                    className="cursor-pointer flex flex-row justify-start gap-3 bg-text rounded-full  p-3 hover:opacity-80">
                    <div className="pink bg-primary w-6 h-6 rounded-full shadow" >
                    </div>
                    <div className="pink bg-accent w-6 h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: blue`);
                setTheme("blue");
                toast.success("Theme changed to blue!");
                }}
                    className="cursor-pointer flex flex-row justify-start gap-3 bg-text rounded-full  p-3 hover:opacity-80">
                    <div className="blue bg-primary w-6 h-6 rounded-full shadow" >
                    </div>
                    <div className="blue bg-accent w-6 h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: yellow`);
                setTheme("yellow");
                toast.success("Theme changed to yellow!");
                }}
                    className="cursor-pointer flex flex-row justify-start gap-3 bg-text rounded-full  p-3 hover:opacity-80">
                    <div className="yellow bg-primary w-6 h-6 rounded-full shadow" >
                    </div>
                    <div className="yellow bg-accent w-6 h-6 rounded-full shadow">
                    </div>
            </div>
        </div>
    )
}

export default ThemeMenu