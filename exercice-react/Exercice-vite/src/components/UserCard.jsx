export default function UserCard({ name, role }) {
  return (
    <div className={"user-card"}>
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
}
