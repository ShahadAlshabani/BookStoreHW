import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card';

type Book = {
  id: string;
  title: string;
  image: string;
  author: string;
  summary: string;
  price:string;
};
export const Home = ({ books }: { books: Book[] }) => {

  return (
    <div>
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
       <NavBar></NavBar>
       <Card books={books} />
      </div>

      <Footer/>
    </div>

    </div>
  )
}
