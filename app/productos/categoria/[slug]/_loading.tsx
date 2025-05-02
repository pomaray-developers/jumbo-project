import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
				{/* Hero section skeleton */}
				<div className="relative h-[250px] overflow-hidden">
					<Skeleton className="w-full h-full absolute" />
					<div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center">
						<Skeleton className="h-10 w-1/3 mb-4" />
						<Skeleton className="h-6 w-1/2" />
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					{/* Search and filter skeleton */}
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
						<Skeleton className="h-10 w-full sm:w-[300px]" />
						<Skeleton className="h-10 w-full sm:w-[180px]" />
					</div>

					{/* Product grid skeleton */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{Array(8)
							.fill(0)
							.map((_, index) => (
								<div
									key={index}
									className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
								>
									<Skeleton className="w-full h-48" />
									<div className="p-4">
										<Skeleton className="h-6 w-3/4 mb-2" />
										<Skeleton className="h-4 w-1/2 mb-4" />
										<div className="flex justify-between items-center">
											<Skeleton className="h-6 w-1/4" />
											<Skeleton className="h-10 w-10 rounded-full" />
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
