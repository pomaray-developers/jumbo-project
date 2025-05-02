"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Heart,
	ShoppingCart,
	Star,
	Truck,
	RotateCcw,
	Shield,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { allProducts } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import type { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const { addItem } = useCart();
	const [quantity, setQuantity] = useState("1");
	const [product, setProduct] = useState<Product | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	// Safely access params using use() to unwrap the Promise
	const productId = use(params).id;

	// Separate data fetching in a useEffect to avoid infinite loops
	useEffect(() => {
		// Reset states when ID changes
		setIsLoading(true);
		setError(false);

		// Simulate network delay for better UX with loading state
		const timer = setTimeout(() => {
			const foundProduct = allProducts.find((p) => p.id === productId);

			if (foundProduct) {
				setProduct(foundProduct);
			} else {
				setError(true);
			}

			setIsLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [productId]); // Use productId instead of params.id

	// Calculate related products outside the render flow to avoid unnecessary calculations
	const relatedProducts =
		!isLoading && product
			? allProducts
				.filter((p) => p.category === product.category && p.id !== productId)
				.slice(0, 4)
			: [];

	// Show loading state
	if (isLoading) {
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

	// Show error state if product not found
	if (error || !product) {
		return (
			<>
				<Navbar />
				<main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
						<p className="mb-6">
							Lo sentimos, el producto que buscas no existe o ha sido eliminado.
						</p>
						<Button asChild className="bg-red-600 hover:bg-red-700">
							<Link href="/productos">Ver todos los productos</Link>
						</Button>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	// Calculate discounted price once product is confirmed to exist
	const discountedPrice =
		product.discount > 0
			? product.price * (1 - product.discount / 100)
			: product.price;

	const handleAddToCart = () => {
		for (let i = 0; i < Number.parseInt(quantity); i++) {
			addItem(product);
		}

		toast({
			title: "Producto añadido",
			description: `${product.name} ha sido añadido a tu carrito.`,
		});
	};

	// Only render product details after loading is complete and product exists
	return (
		<>
			<Navbar />
			<main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div>
							<div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
								<div className="relative pt-[100%]">
									<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>

						<div>
							<div className="mb-2">
								<Link
									href={`/productos/categoria/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
									className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors"
								>
									{product.category}
								</Link>
							</div>

							<h1 className="text-3xl font-bold mb-4">{product.name}</h1>

							<div className="flex items-center mb-4">
								<div className="flex items-center mr-4">
									<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
									<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
									<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
									<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
									<Star className="w-5 h-5 text-gray-300" />
								</div>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									(24 reseñas)
								</span>
							</div>

							<div className="mb-6">
								{product.discount > 0 ? (
									<div className="flex items-center gap-2">
										<span className="text-3xl font-bold text-red-600">
											{formatCurrency(discountedPrice)}
										</span>
										<span className="text-lg text-gray-500 line-through">
											{formatCurrency(product.price)}
										</span>
										<span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
											-{product.discount}%
										</span>
									</div>
								) : (
									<span className="text-3xl font-bold">
										{formatCurrency(product.price)}
									</span>
								)}
							</div>

							<p className="text-gray-600 dark:text-gray-300 mb-6">
								{product.description}
							</p>

							<div className="flex items-center mb-6">
								<div className="w-24 mr-4">
									<Select value={quantity} onValueChange={setQuantity}>
										<SelectTrigger>
											<SelectValue placeholder="Cantidad" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">1</SelectItem>
											<SelectItem value="2">2</SelectItem>
											<SelectItem value="3">3</SelectItem>
											<SelectItem value="4">4</SelectItem>
											<SelectItem value="5">5</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="flex-1">
									<span
										className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
									>
										{product.stock > 0
											? `${product.stock} unidades disponibles`
											: "Agotado"}
									</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 mb-8">
								<Button
									className="flex-1 bg-red-600 hover:bg-red-700"
									onClick={handleAddToCart}
									disabled={product.stock === 0}
								>
									<ShoppingCart className="mr-2 h-4 w-4" />
									Añadir al carrito
								</Button>
								<Button variant="outline" className="flex-1">
									<Heart className="mr-2 h-4 w-4" />
									Añadir a favoritos
								</Button>
							</div>

							<div className="space-y-4">
								<div className="flex items-center">
									<Truck className="h-5 w-5 text-gray-500 mr-3" />
									<div>
										<h4 className="font-medium">Envío Gratis</h4>
										<p className="text-sm text-gray-500">
											En pedidos superiores a $50
										</p>
									</div>
								</div>

								<div className="flex items-center">
									<RotateCcw className="h-5 w-5 text-gray-500 mr-3" />
									<div>
										<h4 className="font-medium">Devoluciones Gratuitas</h4>
										<p className="text-sm text-gray-500">
											30 días para devoluciones
										</p>
									</div>
								</div>

								<div className="flex items-center">
									<Shield className="h-5 w-5 text-gray-500 mr-3" />
									<div>
										<h4 className="font-medium">Garantía de Calidad</h4>
										<p className="text-sm text-gray-500">
											Productos de alta calidad garantizados
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Tabs defaultValue="description" className="mb-12">
						<TabsList className="w-full justify-start border-b rounded-none">
							<TabsTrigger value="description">Descripción</TabsTrigger>
							<TabsTrigger value="specifications">Especificaciones</TabsTrigger>
							<TabsTrigger value="reviews">Reseñas</TabsTrigger>
						</TabsList>
						<TabsContent
							value="description"
							className="bg-white dark:bg-gray-800 p-6 rounded-lg mt-6"
						>
							<h3 className="text-xl font-bold mb-4">
								Descripción del Producto
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4">
								{product.description}
							</p>
							<p className="text-gray-600 dark:text-gray-300">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
								eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
								ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl
								nisl eget nisl.
							</p>
						</TabsContent>
						<TabsContent
							value="specifications"
							className="bg-white dark:bg-gray-800 p-6 rounded-lg mt-6"
						>
							<h3 className="text-xl font-bold mb-4">Especificaciones</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<h4 className="font-medium mb-2">Información General</h4>
									<ul className="space-y-2">
										<li className="flex justify-between">
											<span className="text-gray-500">Marca</span>
											<span>Jumbo</span>
										</li>
										<li className="flex justify-between">
											<span className="text-gray-500">Categoría</span>
											<span>{product.category}</span>
										</li>
										<li className="flex justify-between">
											<span className="text-gray-500">Código</span>
											<span>JMB-{product.id}</span>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="font-medium mb-2">Detalles</h4>
									<ul className="space-y-2">
										<li className="flex justify-between">
											<span className="text-gray-500">Peso</span>
											<span>0.5 kg</span>
										</li>
										<li className="flex justify-between">
											<span className="text-gray-500">Origen</span>
											<span>Nacional</span>
										</li>
										<li className="flex justify-between">
											<span className="text-gray-500">Stock</span>
											<span>{product.stock} unidades</span>
										</li>
									</ul>
								</div>
							</div>
						</TabsContent>
						<TabsContent
							value="reviews"
							className="bg-white dark:bg-gray-800 p-6 rounded-lg mt-6"
						>
							<h3 className="text-xl font-bold mb-4">Reseñas de Clientes</h3>
							<div className="space-y-6">
								<div>
									<div className="flex items-center mb-2">
										<div className="flex items-center mr-2">
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										</div>
										<span className="font-medium">Excelente producto</span>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
										Muy satisfecho con la calidad del producto. Llegó en
										perfectas condiciones y cumple con todas mis expectativas.
									</p>
									<div className="text-xs text-gray-500">
										<span className="font-medium">María G.</span> - 15 de abril,
										2023
									</div>
								</div>

								<Separator />

								<div>
									<div className="flex items-center mb-2">
										<div className="flex items-center mr-2">
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 text-gray-300" />
										</div>
										<span className="font-medium">Buen producto</span>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
										Buena relación calidad-precio. Recomendable para uso diario.
									</p>
									<div className="text-xs text-gray-500">
										<span className="font-medium">Carlos P.</span> - 2 de marzo,
										2023
									</div>
								</div>

								<Separator />

								<div>
									<div className="flex items-center mb-2">
										<div className="flex items-center mr-2">
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										</div>
										<span className="font-medium">Increíble</span>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
										Superó mis expectativas. Definitivamente volveré a comprar.
									</p>
									<div className="text-xs text-gray-500">
										<span className="font-medium">Ana R.</span> - 18 de febrero,
										2023
									</div>
								</div>
							</div>
						</TabsContent>
					</Tabs>

					<div className="mb-12">
						<h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{relatedProducts.map((relatedProduct) => (
								<Card key={relatedProduct.id} className="overflow-hidden group">
									<div className="relative pt-[100%]">
										<Link href={`/productos/${relatedProduct.id}`}>
											<Image
												src={relatedProduct.image || "/placeholder.svg"}
												alt={relatedProduct.name}
												fill
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										</Link>
										{relatedProduct.discount > 0 && (
											<div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-0.5 rounded">
												-{relatedProduct.discount}%
											</div>
										)}
									</div>
									<CardContent className="p-4">
										<Link
											href={`/productos/${relatedProduct.id}`}
											className="block mb-2"
										>
											<h3 className="font-medium line-clamp-2 hover:text-red-600 transition-colors">
												{relatedProduct.name}
											</h3>
										</Link>
										<div className="flex items-center justify-between mt-2">
											<div className="flex items-center gap-2">
												{relatedProduct.discount > 0 ? (
													<>
														<span className="font-bold text-red-600">
															{formatCurrency(
																relatedProduct.price *
																(1 - relatedProduct.discount / 100),
															)}
														</span>
														<span className="text-sm text-gray-500 line-through">
															{formatCurrency(relatedProduct.price)}
														</span>
													</>
												) : (
													<span className="font-bold">
														{formatCurrency(relatedProduct.price)}
													</span>
												)}
											</div>
											<Button
												variant="ghost"
												size="icon"
												className="h-8 w-8 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
												onClick={() => {
													addItem(relatedProduct);
													toast({
														title: "Producto añadido",
														description: (
															<div className="flex items-center space-x-2">
																<span>{product.name} ha sido añadido a tu carrito</span>
																<img src={product.image} alt={product.name} className="w-8 h-8 rounded-full" />
															</div>
														),
														action: <ToastAction altText="Ver carrito">Ver carrito</ToastAction>,
													})
												}}
											>
												<ShoppingCart className="h-4 w-4" />
												<span className="sr-only">Añadir al carrito</span>
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
