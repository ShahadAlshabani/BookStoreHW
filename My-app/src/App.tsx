
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
function App() {
  const books = [
    {
      id: "11",
      title: "البؤساء",
      image: "https://cdn.abjjad.com/pub/512c1a23-7ffd-4028-ab40-0a1971aefb8a.png",
      author: "فِكتُور هِيوگو",
      summary: "رواية تحكي قصة حياة جان فالجان وتأثيرها على حياة الناس من حوله في فترة الثورة الفرنسية.",
      price: "20"
    },
    {
      id: "12",
      title: "ثلاثية غرناطة",
      image: "https://upload.wikimedia.org/wikipedia/ar/thumb/2/2a/Garnada_trilogy.jpg/220px-Garnada_trilogy.jpg",
      author: "رضوى عاشور",
      summary: "ثلاثية تاريخية تحكي قصة ملوك وملكات غرناطة في فترة الأندلس الإسلامية.",
      price: "30"

    },
    {
      id: "13",
      title: "رجال في الشمس",
      image: "https://upload.wikimedia.org/wikipedia/ar/4/40/%D8%B5%D9%88%D8%B1%D8%A9_%D8%BA%D9%84%D8%A7%D9%81_%D8%B1%D9%88%D8%A7%D9%8A%D8%A9_%D8%B1%D8%AC%D8%A7%D9%84_%D9%81%D9%8A_%D8%A7%D9%84%D8%B4%D9%85%D8%B3.jpg",
      author: "غسان كنفاني",
      summary: "رواية ترصد حياة ثلاثة رجال فلسطينيين يسعون للهجرة والعمل في الخليج العربي.",
      price: "40"

    },
    {
      id: "14",
      title: "الأصل",
      image: "https://www.neelwafurat.com/images/lb/abookstore/covers/normal/299/299262.jpg",
      author: "دان براون",
      summary: "رواية مثيرة تدور حول أصول البشرية وتحقيقات باحثة في المجال العلمي والتاريخ.",
      price: "44"
    },
    {
      id: "15",
      title: "مئة عام من العزلة",
      image: "https://www.neelwafurat.com/images/lb/abookstore/covers/normal/292/292202.jpg",
      author: "غابرييل غارسيا ماركيز",
      summary: "رواية تحكي قصة عائلة بوينديا التي تعيش في بلدة معزولة وتتعرض لأحداث غريبة عبر مئة عام.",
      price: "30"

    },
    {
      id: "16",
      title: "الفيل الأزرق",
      image: "https://upload.wikimedia.org/wikipedia/ar/thumb/f/f3/Al-Feel_al-Azraq.jpg/260px-Al-Feel_al-Azraq.jpg",
      author: "أحمد مراد",
      summary: "رواية تدور في إطار تحقيق جريمة قتل تهز مدينة القاهرة، وتستكشف العديد من القضايا الاجتماعية والسياسية.",
      price: "10"
    }
  ];
  return (
    <>
     <Routes>
        <Route path = "/" element={<Home books={books}/>}></Route>
        <Route path = "book" >
        <Route path=":id" element={<Book books={books} />} />
        </Route>

   </Routes>
    </>

  )
}

export default App
