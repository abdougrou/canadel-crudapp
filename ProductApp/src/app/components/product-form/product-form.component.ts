import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit, OnChanges {
  // If the component is visible
  @Input() isVisible = false;

  // Product selected from the list
  @Input() product: Product | null = null;

  // Emitters to the products list component
  @Output() save = new EventEmitter<Partial<Product>>();
  @Output() cancel = new EventEmitter<void>();

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      description: ['']
    });
  }

  ngOnInit() {
    this.updateForm();
  }

  // Bind the product infos in the form when the values in the object are changed
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] || changes['isVisible']) {
      this.updateForm();
    }
  }

  // Fill the form with the selected product's infos
  private updateForm() {
    if (this.product) {
      this.productForm.patchValue({
        name: this.product.name,
        price: this.product.price,
        description: this.product.description || ''
      });
    } else {
      this.resetForm();
    }
  }

  // To show edit features when a product is selected
  get isEdit(): boolean {
    return !!this.product;
  }


  onSubmit() {
    if (this.productForm.valid) {
      this.save.emit(this.productForm.value);
      this.resetForm();
    }
  }

  onCancel() {
    this.cancel.emit();
    this.resetForm();
  }

  private resetForm() {
    this.productForm.reset({
      name: '',
      price: 0,
      description: ''
    });
  }
}
