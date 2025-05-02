import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<>
			<Navbar />
			<main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div>
							<Skeleton className="h-[400px] w-full rounded-lg" />
						</div>

						<div className="flex flex-col gap-4">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-10 w-2/3" />
							<div className="flex gap-1">
								<Skeleton className="h-5 w-5" />
								<Skeleton className="h-5 w-5" />
								<Skeleton className="h-5 w-5" />
								<Skeleton className="h-5 w-5" />
								<Skeleton className="h-5 w-5" />
							</div>
							<Skeleton className="h-8 w-32" />
							<Skeleton className="h-20 w-full" />
							<div className="flex gap-4 mt-4">
								<Skeleton className="h-10 flex-1" />
								<Skeleton className="h-10 flex-1" />
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
