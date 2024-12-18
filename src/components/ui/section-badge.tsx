interface Props {
  title: string
}

export const SectionBadge = ({ title }: Props) => {
  return (
    <div className="px-4 py-1 rounded-full bg-blue-950/90 cursor-pointer select-none">
      <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
        {title}
      </div>
    </div>
  )
}
