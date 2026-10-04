import type { Pending } from "../lib/data";

/** What a section is waiting on. Every row is a request to the lecturer, not content. */
export default function PendingList({ items }: { items: Pending[] }) {
  return (
    <ul className="pending-list">
      {items.map((p) => (
        <li key={p.label}>
          <span className="p-t">{p.label}</span>
          <span className="p-a">{p.ask}</span>
        </li>
      ))}
    </ul>
  );
}
