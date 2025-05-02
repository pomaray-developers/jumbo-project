import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
				<div className="bg-white dark:bg-gray-800 py-8 mb-8">
					<div className="container mx-auto px-4">
						<Skeleton className="h-8 w-48 mb-2" />
						<Skeleton className="h-4 w-96" />
					</div>
				</div>

				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="hidden md:block w-64 space-y-6">
							<div>
								<Skeleton className="h-6 w-24 mb-3" />
								<div className="space-y-2">
									{[1, 2, 3, 4, 5].map((i) => (
										<div key={i} className="flex items-center space-x-2">
											<Skeleton className="h-4 w-4" />
											<Skeleton className="h-4 w-32" />
										</div>
									))}
								</div>
							</div>

							<Separator />

							<div>
								<Skeleton className="h-6 w-24 mb-3" />
								<Skeleton className="h-4 w-full mb-6" />
								<div className="flex items-center justify-between">
									<Skeleton className="h-4 w-8" />
									<Skeleton className="h-4 w-8" />
								</div>
							</div>

							<Separator />

							<Skeleton className="h-9 w-full" />
						</div>

						{/* Contenido principal */}
						<div className="flex-1">
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
								<div className="relative w-full sm:w-auto">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
									<Input
										type="search"
										placeholder="Buscar productos..."
										disabled
										className="pl-10 w-full sm:w-[300px]"
									/>
								</div>

								<div className="flex items-center gap-2 w-full sm:w-auto">
									<Button
										variant="outline"
										size="icon"
										className="md:hidden"
										disabled
									>
										<SlidersHorizontal className="h-4 w-4" />
									</Button>
									<Skeleton className="h-10 w-[180px]" />
								</div>
							</div>

							{/* Resultados */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
								{Array(12)
									.fill(0)
									.map((_, i) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={i}
											className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow"
										>
											<Skeleton className="h-48 w-full" />
											<div className="p-4">
												<Skeleton className="h-4 w-1/2 mb-2" />
												<Skeleton className="h-5 w-3/4 mb-3" />
												<Skeleton className="h-4 w-1/3 mb-4" />
												<div className="flex justify-between items-center">
													<Skeleton className="h-6 w-16" />
													<Skeleton className="h-9 w-9 rounded-full" />
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
