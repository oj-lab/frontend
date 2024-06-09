export default function NewsCard() {
  return (
    <div className="card rounded border border-base-content/10 bg-base-100">
      <div className="card-body">
        <h1 className="card-title">
          Release Note
          <small className="text-default-500">v0.0.1</small>
        </h1>
        <p className="font-medium">Hello OJ Lab front 💕</p>
        <p>
          OJ Lab front is now in alpha stage. We are working hard to bring you
          the best experience.
        </p>
        <p>Stay tuned!</p>
      </div>
    </div>
  );
}
