import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  pill?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  pill,
  title,
  highlight,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={cn(centered && 'text-center', className)}>
      {pill && (
        <span className="section-pill">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          {pill}
        </span>
      )}
      <h2 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl dark:text-white text-text-primary leading-tight">
        {highlight ? (
          <>
            {titleParts[0]}
            <span
              className="gradient-text dark:dark-gradient-text"
            >
              {highlight}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base lg:text-lg dark:text-text-muted-dark text-text-secondary leading-relaxed max-w-2xl font-body" style={centered ? { marginInline: 'auto' } : undefined}>
          {description}
        </p>
      )}
    </div>
  )
}
