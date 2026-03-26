import React from 'react'

interface HighlightConfig {
  word: string
  color: string
}

interface HighlightTextProps {
  text: string
  highlights: HighlightConfig[]
  className?: string
}

export function HighlightText({ text, highlights, className = '' }: HighlightTextProps) {
  // Filter out empty or undefined words first
  const validHighlights = highlights?.filter(h => h.word && h.word.trim().length > 0) || []
  
  if (validHighlights.length === 0) {
    return <span className={className}>{text}</span>
  }

  // Sort highlights by word length (longest first) to handle overlapping words correctly
  const sortedHighlights = [...validHighlights].sort((a, b) => b.word.length - a.word.length)

  // Create regex pattern for all highlight words
  const pattern = sortedHighlights
    .map(h => h.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special regex chars
    .join('|')
  
  const regex = new RegExp(`(${pattern})`, 'gi')

  // Split text and map highlights
  const parts = text.split(regex)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null

        // Find matching highlight config (case-insensitive)
        const highlight = sortedHighlights.find(
          h => h.word.toLowerCase() === part.toLowerCase()
        )

        if (highlight) {
          // If color is CSS variable, use className instead of inline style
          if (highlight.color.includes('var(')) {
            return (
              <span key={index} className="text-primary">
                {part}
              </span>
            )
          }
          
          return (
            <span key={index} style={{ color: highlight.color }}>
              {part}
            </span>
          )
        }

        return <span key={index}>{part}</span>
      })}
    </span>
  )
}
