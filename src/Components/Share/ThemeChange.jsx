import { useEffect, useState } from "react"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


export default function ThemeChange() {
    const [themes, setThemes] = useState(true)

    useEffect(() => {
      document
        .querySelector("html")
        .setAttribute("data-theme", themes ? "light" : "dark");
    }, [themes]);

  return (
    <div onClick={()=>setThemes(!themes)}>
{
    themes ? <MdDarkMode /> : <CiLight />
}
    </div>
  )
}
