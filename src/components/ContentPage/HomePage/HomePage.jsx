import BookNow from "./BookNow/BookNow";
import CleaningCarusel from "./CleaningCarusel/CleaningCarusel";
import StartPage from "./StartPage/StartPage";



export default function HomePage() {
  return (
    <div>
      <StartPage />
      <CleaningCarusel />
      <BookNow/>
    </div>
  );
}