import Brand from "@/assets/icons/Banner.svg";

export default function Nav() {
  return (
    <div id="navbar" className="w-full h-48 p-5 flex justify-between items-center">
      <div className="h-full w-fit" >
        <Brand
          height="100%"
          width="100%"
          viewBox="0 0 937 230"
        />
      </div>
      <div><p className="font-bold" >Software Engineer and Mathematics M.S.</p></div>
    </div>
  );
}
