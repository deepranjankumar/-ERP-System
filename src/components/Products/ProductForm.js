// ProductForm.js
import React from 'react';
import './productForm.css'
const ProductForm = ({ newProduct, setNewProduct, isEditing, handleAddProduct, handleUpdateProduct }) => {
  return (
    <>
    <form className="product-form">
       <div className="form-labal">
      <label>Name:</label>
      <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      </div>
      <div className="form-labal">
      <label>Category:</label>
      <input type="text" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
      </div>
      <div className="form-labal">
      <label>Price:</label>
      <input type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })} />
      </div>
      <div className="form-labal">
      <label>Stock Quantity:</label>
      <input type="number" value={newProduct.stockQuantity} onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: parseInt(e.target.value) || 0 })} />
      </div>
      <div>
      {isEditing ? (
        <button type="button" onClick={handleUpdateProduct}>
          Update Product
        </button>
      ) : (
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button> 
      )}
      </div>
    </form>
    </> );
};

export default ProductForm;