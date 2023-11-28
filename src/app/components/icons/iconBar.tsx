export default function IconBar({ title, children }: { title: string; children: string | JSX.Element | JSX.Element[] }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="flex justify-evenly items-center">{children}</div>
    </div>
  )
}