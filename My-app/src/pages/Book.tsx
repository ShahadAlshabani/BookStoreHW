
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom';

export const Book = () => {
    const { id } = useParams();


  return (
    <div>
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
       <NavBar></NavBar>
       <p>Book ID: {id}</p>
       <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-right">
             <h1 className="text-4xl font-bold"></h1>
             <p className="text-gray-600">اسم الكاتب</p>
        </div>



      <div className="flex justify-end">
    <img src="https://cdn.abjjad.com/pub/512c1a23-7ffd-4028-ab40-0a1971aefb8a.png" alt="Image" className="w-64 h-64"/>
    </div>

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold mb-2">الوصف</h2>
        <p>نص الوصف هنا...</p>
      </div>

      <div className="mt-8 text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          أضف إلى السلة
        </button>
    </div>
      </div>
      </div>

      <Footer/>
    </div>

    
    </div>
  )
}
