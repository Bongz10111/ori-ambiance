import React, { useState } from 'react';

function ProductCard({ title, image, scent, price }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedScent, setSelectedScent] = useState(scent);

  const handleOrder = () => {
    alert(`Ordered ${quantity} x ${title} (${selectedScent}) for ${price}`);
  };

  const scentOptions = ['Vanilla', 'Lavender', 'Ocean', 'Plain'];

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>Price: {price}</p>

          <div className="mb-2">
            <label className="form-label">Quantity:</label>
            <select className="form-select" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Scent:</label>
            <select className="form-select" value={selectedScent} onChange={(e) => setSelectedScent(e.target.value)}>
              {scentOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button className="btn btn-pink w-100" onClick={handleOrder}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
