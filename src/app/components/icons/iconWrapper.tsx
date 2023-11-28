export default function IconWrapper({ title, className, children }: { title: string; className?: string; children: string | JSX.Element | JSX.Element[]; }) {
  return (
    <div className={`flex flex-col ${className ?? ''} aspect-square`}>
      <div className="flex justify-center flex-1">
        {children}   
      </div>    
      <p className="text-center">{title}</p>
    </div>
  )
}