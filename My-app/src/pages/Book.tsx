
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom';

type Book = {
  id: string;
  title: string;
  image: string;
  author: string;
  summary: string;
  price:string;

};
export const Book = ({ books }: { books: Book[] }) => {
    const { id } = useParams();

    const book = books.find((book) => book.id === id);
    if (!book) {
      return <div>Book not found</div>;
    }
  
  return (
    <div>
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
       <NavBar></NavBar>
       <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-right">
             <h1 className="text-4xl font-bold">{book.title}</h1>
             <p className="text-gray-600">{book.author}</p>
        </div>



      <div className="flex justify-end">
    <img src={book.image} alt="Image" className="w-64 h-64"/>
    </div>

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold mb-2">{book.summary}</h2>
      </div>

      <div className="mt-8 text-right">
      <h2 className="text-2xl font-bold mb-2">السعر</h2>
      <p>{book.price}</p>

    </div>
      </div>
      </div>

      <Footer/>
    </div>

    
    </div>
  )
}
