import { Project } from "./components/project/project"

export function Projects() {
  return (
    <section className="h-full w-full py-5">
      <div className="w-4/5 h-full m-auto grid grid-cols-2 gap-4">
        <Project title="Fitter"></Project>
        <Project title="Haters"></Project>
      </div>
    </section>
  )
}