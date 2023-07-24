import Header from "../../components/Header/Header";
import NewNote from "../../components/NewNote/NewNote";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function Home() {
  return (
    <div>
      <Header />
      <NewNote />
      <NoteCard />
    </div>
  );
}
