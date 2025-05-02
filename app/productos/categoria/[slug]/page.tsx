"use client";

import { useState, useEffect, use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/types";
import { allProducts } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import Image from "next/image";
import Loading from "./_loading";

export default function CategoryPage({
	params,
}: { params: Promise<{ slug: string }> }) {
	// Unwrap params using React.use()
	const unwrappedParams = use(params);
	const slug = unwrappedParams.slug;

	const { addItem } = useCart();
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [sortBy, setSortBy] = useState("featured");
	const [isLoading, setIsLoading] = useState(true);

	// Mapeo de slugs a nombres de categoría
	const categoryMap: Record<string, string> = {
		"frutas-verduras": "Frutas y Verduras",
		carniceria: "Carnicería",
		panaderia: "Panadería",
		lacteos: "Lácteos",
		bebidas: "Bebidas",
		limpieza: "Limpieza",
		congelados: "Congelados",
		snacks: "Snacks",
		despensa: "Despensa",
	};

	const categoryName = categoryMap[slug] || "Categoría";

	useEffect(() => {
		// Set loading to true at the start of data fetching
		setIsLoading(true);

		// Filtrar productos por categoría
		const categoryProducts = allProducts.filter(
			(product) =>
				product.category.toLowerCase() === categoryName.toLowerCase(),
		);
		setProducts(categoryProducts);
		setFilteredProducts(categoryProducts);

		// Set loading to false after data processing is complete
		setIsLoading(false);
	}, [categoryName, slug]); // Updated to use unwrapped slug

	useEffect(() => {
		if (products.length === 0) return; // Skip if products haven't loaded yet

		let result = [...products];

		// Filtrar por búsqueda
		if (searchQuery) {
			result = result.filter(
				(product) =>
					product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.description.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Ordenar productos
		switch (sortBy) {
			case "price-asc":
				result.sort((a, b) => {
					const priceA =
						a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
					const priceB =
						b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
					return priceA - priceB;
				});
				break;
			case "price-desc":
				result.sort((a, b) => {
					const priceA =
						a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
					const priceB =
						b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
					return priceB - priceA;
				});
				break;
			case "name-asc":
				result.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "name-desc":
				result.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case "discount":
				result.sort((a, b) => b.discount - a.discount);
				break;
			case "rating":
				result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
				break;
			default:
				// Por defecto, ordenar por destacados (no hacer nada)
				break;
		}

		setFilteredProducts(result);
	}, [products, searchQuery, sortBy]);

	// Obtener imagen de categoría
	const getCategoryImage = () => {
		switch (slug) {
			case "frutas-verduras":
				return "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "carniceria":
				return "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "panaderia":
				return "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "lacteos":
				return "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "bebidas":
				return "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "limpieza":
				return "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "congelados":
				return "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			case "snacks":
				return "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
			default:
				return "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400&q=80";
		}
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
				<div className="relative h-[250px] overflow-hidden">
					<Image
						src={getCategoryImage() || "/placeholder.svg"}
						alt={categoryName}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
						<h1 className="text-4xl font-bold text-white mb-4">
							{categoryName}
						</h1>
						<p className="text-xl text-white/90 max-w-2xl px-4">
							Descubre nuestra selección de productos de{" "}
							{categoryName.toLowerCase()}
						</p>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
						<div className="relative w-full sm:w-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<Input
								type="search"
								placeholder="Buscar productos..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 w-full sm:w-[300px]"
							/>
						</div>

						<div className="w-full sm:w-auto">
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger className="w-full sm:w-[180px]">
									<SelectValue placeholder="Ordenar por" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="featured">Destacados</SelectItem>
									<SelectItem value="price-asc">
										Precio: Menor a Mayor
									</SelectItem>
									<SelectItem value="price-desc">
										Precio: Mayor a Menor
									</SelectItem>
									<SelectItem value="name-asc">Nombre: A-Z</SelectItem>
									<SelectItem value="name-desc">Nombre: Z-A</SelectItem>
									<SelectItem value="discount">Mayor Descuento</SelectItem>
									<SelectItem value="rating">Mejor Valorados</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Resultados */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCart={() => addItem(product)}
							/>
						))}
					</div>

					{filteredProducts.length === 0 && (
						<div className="text-center py-12">
							<h3 className="text-lg font-medium mb-2">
								No se encontraron productos
							</h3>
							<p className="text-gray-500 mb-4">
								Intenta con otros términos de búsqueda
							</p>
							<Button onClick={() => setSearchQuery("")}>
								Limpiar búsqueda
							</Button>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}
