import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
export const Home = () => {
  return (
    <div>
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
       <NavBar></NavBar>
       <div className='flex flex-row justify-center items-center flex-wrap gap-5 mt-16 mb-16'>

      <Card id="11" title="البؤساء" image="https://cdn.abjjad.com/pub/512c1a23-7ffd-4028-ab40-0a1971aefb8a.png" author="فِكتُور هِيوگو" summary="رواية تحكي قصة حياة جان فالجان وتأثيرها على حياة الناس من حوله في فترة الثورة الفرنسية." />
      <Card id="12" title="ثلاثية غرناطة" image="https://upload.wikimedia.org/wikipedia/ar/thumb/2/2a/Garnada_trilogy.jpg/220px-Garnada_trilogy.jpg" author="رضوى عاشور" summary="ثلاثية تاريخية تحكي قصة ملوك وملكات غرناطة في فترة الأندلس الإسلامية."/>
      <Card id="13" title="رجال في الشمس" image="https://upload.wikimedia.org/wikipedia/ar/4/40/%D8%B5%D9%88%D8%B1%D8%A9_%D8%BA%D9%84%D8%A7%D9%81_%D8%B1%D9%88%D8%A7%D9%8A%D8%A9_%D8%B1%D8%AC%D8%A7%D9%84_%D9%81%D9%8A_%D8%A7%D9%84%D8%B4%D9%85%D8%B3.jpg" author="غسان كنفاني" summary="رواية ترصد حياة ثلاثة رجال فلسطينيين يسعون للهجرة والعمل في الخليج العربي."/>
      <Card id="14"title="الأصل"image="https://www.neelwafurat.com/images/lb/abookstore/covers/normal/299/299262.jpg" author="دان براون" summary="رواية مثيرة تدور حول أصول البشرية وتحقيقات باحثة في المجال العلمي والتاريخ."/>      
      <Card id="15"title="مئة عام من العزلة" image="https://www.neelwafurat.com/images/lb/abookstore/covers/normal/292/292202.jpg" author="غابرييل غارسيا ماركيز" summary="رواية تحكي قصة عائلة بوينديا التي تعيش في بلدة معزولة وتتعرض لأحداث غريبة عبر مئة عام."/>
      <Card id="16"title="الفيل الأزرق" image="https://upload.wikimedia.org/wikipedia/ar/thumb/f/f3/Al-Feel_al-Azraq.jpg/260px-Al-Feel_al-Azraq.jpg" author="أحمد مراد" summary="رواية تدور في إطار تحقيق جريمة قتل تهز مدينة القاهرة، وتستكشف العديد من القضايا الاجتماعية والسياسية."/>
      </div>
      </div>

      <Footer/>
    </div>

    </div>
  )
}
