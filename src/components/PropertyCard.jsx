function PropertyCard() {
  return (
    <div className="property-card">
      <img src={property.picture} alt={property.description} />
      <h2>
        {property.type} - {property.price}
      </h2>
      <p>{property.description}</p>
      <a href={property.url}>View Details</a>
    </div>
  );
}

export default PropertyCard;
