import { SkeletonForm } from "../components/skeleton"

export default function Loading() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-between p-6">
            <SkeletonForm />
        </div>
    )
}