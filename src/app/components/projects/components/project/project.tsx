export function Project({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-evenly h-3/4 w-full bg-accentBlue p-12 self-center">
      <div className="">
        <h1 className="font-extrabold text-2xl">{title}</h1>
        <h2 className="text-sm font-light">Subtitle</h2>
      </div>
      <div className="h-3/5 flex items-center justify-center">
        {'Image here'}
      </div>
      <div>
        <h1>{"Project Title"}</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quibusdam cupiditate ut sunt velit ea ratione ipsum praesentium maiores rem provident temporibus, dolore repudiandae laudantium fugiat consequuntur maxime odio qui?</h2>
      </div>
    </div>
  )
}