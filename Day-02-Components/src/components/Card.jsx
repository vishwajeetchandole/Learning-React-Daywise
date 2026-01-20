const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image"
      />
      <h1>Hiking Trails</h1>
      <p>
        Explore scenic trails that wind through lush forests, rocky paths, and
        serene valleys. These routes offer the perfect combination of challenge
        and tranquility, ideal for nature lovers and outdoor enthusiasts.
      </p>
      <button className="card-btn">Learn More</button>
    </div>
  );
};

export default Card;
