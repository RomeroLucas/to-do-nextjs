import { SkeletonCard } from "./components/skeleton"

export default function Loading() {
    return (
        <div className="mx-auto w-full flex flex-wrap items-start rounded">
            {Array.from({length: 10}).map((_, index: number) => {
                return <SkeletonCard key={index} />
            })}
            
        </div>
    )
}