import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  // Popup visibility
  showForm = false;
  showDeletePopup = false;

  // Selected product of each popup
  selectedProduct: Product | null = null;
  productToDelete: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  // Load Product from the database
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  // Open The form with product creation feature
  openCreateForm() {
    this.selectedProduct = null;
    this.showForm = true;
  }

  // Open The form with product edit feature
  editProduct(product: Product) {
    this.selectedProduct = product;
    this.showForm = true;
  }

  // Save The changes of the product modification or
  // Submit The product creation form
  saveProduct(productData: Partial<Product>) {
    if (this.selectedProduct) {
      // If a product is selected I will send the change to database
      this.productService.updateProduct(this.selectedProduct.id, productData).subscribe({
        next: (res) => {
          this.loadProducts();
          this.closeForm();
        },
        error: (error) => {
          console.error('Error updating product:', error);
        }
      });
    } else {
      // Create new product
      this.productService.createProduct(productData as Omit<Product, 'id' | 'createdAt'>).subscribe({
        next: () => {
          this.loadProducts();
          this.closeForm();
        },
        error: (error) => {
          console.error('Error creating product:', error);
        }
      });
    }
  }

  // Show the popup with the selected product
  deleteProduct(product: Product) {
    this.productToDelete = product;
    this.showDeletePopup = true;
  }

  // Send Delete request of the selected product
  confirmDelete() {
    if (this.productToDelete) {
      this.productService.deleteProduct(this.productToDelete.id).subscribe({
        next: () => {
          this.loadProducts();
          this.closeDeletePopup();
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }

  // Close create/edit form
  closeForm() {
    this.showForm = false;
    this.selectedProduct = null;
  }

  // Close the delete popup
  closeDeletePopup() {
    this.showDeletePopup = false;
    this.productToDelete = null;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
}
