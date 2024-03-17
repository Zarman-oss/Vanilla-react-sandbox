export default function Badge({ name, handle, img }) {
  return (
    <div className="flex">
      <h1>{name}</h1>
      <p>{handle}</p>
      <img src={img} alt="photo" />
    </div>
  );
}
