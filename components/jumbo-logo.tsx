export function JumboLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8h100v24H10z" fill="none" />
      <path
        d="M17.5 12h12c2.5 0 4.5 2 4.5 4.5v7c0 2.5-2 4.5-4.5 4.5h-12c-2.5 0-4.5-2-4.5-4.5v-7c0-2.5 2-4.5 4.5-4.5z"
        fill="#E31837"
      />
      <path
        d="M20 16v8h2v-3h1.5l1.5 3h2l-1.7-3.5c1-.3 1.7-1.2 1.7-2.3 0-1.4-1.1-2.5-2.5-2.5H20zm2 2h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2V18zM35 16l-3 8h2l.6-1.5h2.8l.6 1.5h2l-3-8h-2zm.5 2.5l1 2.5h-2l1-2.5zM45 16v8h2v-3h1.5l1.5 3h2l-1.7-3.5c1-.3 1.7-1.2 1.7-2.3 0-1.4-1.1-2.5-2.5-2.5H45zm2 2h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2V18zM60 16v8h6v-2h-4v-1h3v-2h-3v-1h4v-2h-6zM72 16v8h2v-3h3v3h2v-8h-2v3h-3v-3h-2zM85 16v8h6v-2h-4v-1h3v-2h-3v-1h4v-2h-6zM97 16v8h2v-3h3v3h2v-8h-2v3h-3v-3h-2z"
        fill="white"
      />
    </svg>
  )
}
