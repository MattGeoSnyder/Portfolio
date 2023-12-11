export default function IconBar({ title, children }: { title: string; children: string | JSX.Element | JSX.Element[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex justify-evenly h-28">{children}</div>
    </div>
  )
}