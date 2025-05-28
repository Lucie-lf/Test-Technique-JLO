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
        <div className="absolute top-20 left-5 md:top-35 md:left-10 lg:top-40 lg:left-15 ">
            <div 
                onClick={() => {
                console.log(`Selected theme: green`);
                setTheme("green");
                toast.success("Theme changed to green!");
                }}
                    className="cursor-pointer mb-3 flex flex-row justify-start gap-3 bg-text rounded-full p-2 w-fit hover:opacity-80">
                    <div className="green bg-primary w-4 h-4 md:w-6 md:h-6 rounded-full shadow" >
                    </div>
                    <div className="green bg-accent w-4 h-4 md:w-6 md:h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: pink`);
                setTheme("pink");
                toast.success("Theme changed to pink!");
                }}
                    className="cursor-pointer mb-3 flex flex-row justify-start gap-3 bg-text rounded-full p-2 w-fit hover:opacity-80">
                    <div className="pink bg-primary w-4 h-4 md:w-6 md:h-6 rounded-full shadow" >
                    </div>
                    <div className="pink bg-accent w-4 h-4 md:w-6 md:h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: blue`);
                setTheme("blue");
                toast.success("Theme changed to blue!");
                }}
                    className="cursor-pointer mb-3 flex flex-row justify-start gap-3 bg-text rounded-full p-2 w-fit hover:opacity-80">
                    <div className="blue bg-primary w-4 h-4 md:w-6 md:h-6 rounded-full shadow" >
                    </div>
                    <div className="blue bg-accent w-4 h-4 md:w-6 md:h-6 rounded-full shadow">
                    </div>
            </div>

            <div 
                onClick={() => {
                console.log(`Selected theme: yellow`);
                setTheme("yellow");
                toast.success("Theme changed to yellow!");
                }}
                    className="cursor-pointer mb-3 flex flex-row justify-start gap-3 bg-text rounded-full p-2 w-fit hover:opacity-80">
                    <div className="yellow bg-primary w-4 h-4 md:w-6 md:h-6 rounded-full shadow" >
                    </div>
                    <div className="yellow bg-accent w-4 h-4 md:w-6 md:h-6 rounded-full shadow">
                    </div>
            </div>
        </div>
    )
}

export default ThemeMenu