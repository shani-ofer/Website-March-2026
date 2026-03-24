import { Card, DomainTag } from "@/src/components/UI";
import { Button } from "@/src/components/Button";

export function CompaniesPage() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="pt-[120px] pb-[80px] px-6 text-center max-w-[1000px] mx-auto w-full">
        <h1 className="text-deep-navy mb-4">למנהלים שלכם מגיעה תמיכה טובה יותר</h1>
        <p className="text-[18px] md:text-[22px] font-medium text-[#555] max-w-3xl mx-auto mb-10 leading-relaxed">
          ייעוץ וקואצ'ינג ניהולי מעשי ממישהו שבנה והוביל צוותים במשך למעלה מ-25 שנה.
        </p>
        <Button variant="whatsapp" href="https://wa.me/972545422634" className="flex items-center gap-2 mx-auto">
          <span>צרו קשר לשיחת ייעוץ ראשונית</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </Button>
      </section>

      {/* Section 2: The Challenge */}
      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">הפער בין מנהל בינוני למנהל מצויין</h2>
          <div className="space-y-5 text-[#555] body-text leading-relaxed max-w-3xl">
            <p>
              רוב החברות מקדמות את העובדים המקצועיים החזקים ביותר שלהן (ICs) לתפקידי ניהול. זה הגיוני. אבל ניהול הוא סט כישורים שונה לחלוטין: הובלת אנשים, ניווט קונפליקטים, קבלת החלטות עם מידע חלקי, בניית תרבות צוותית.
            </p>
            <p>
              ללא התמיכה הנכונה, אפילו המנהלים המוכשרים ביותר מתקשים. הסימנים מוכרים: כאבי גדילה בצוותים, ירידה במורל, מנהלים שמכבים שריפות במקום לבנות.
            </p>
            <p className="font-medium text-deep-navy text-[18px] mt-6">
              כאן אני נכנס לתמונה.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How I Work */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">קואצ'ינג ויעוץ מעשי לכל שכבת ניהול</h2>
          <p className="text-[#555] body-text leading-relaxed max-w-3xl mb-12">
            אני עובד עם מנהלים באחד-על-אחד, ומתמקד באתגרים האמיתיים שהם מתמודדים איתם ביומיום. בלי מודלים גנריים. כל התקשרות מתחילה בהבנת הארגון שלכם, האנשים שלכם, והפערים הספציפיים שאתם רוצים לסגור.
          </p>
          
          <h3 className="text-deep-navy text-[22px] font-bold mb-6">עם מי אני עובד</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <Card 
              title="ראשי צוותים (Team Leads)" 
              text="נכנסים לתפקיד הניהולי הראשון שלהם ולומדים לאזן בין תרומה אישית לאחריות צוותית." 
            />
            <Card 
              title="מנהלי ביניים (Mid-level Managers)" 
              text="לומדים להרחיב את ההשפעה שלהם, להאציל סמכויות ביעילות ולבנות פרקטיקות צוותיות בנות קיימא." 
            />
            <Card 
              title='סמנכ"לים (VPs)' 
              text="מנווטים במורכבות ארגונית, ניהול מחזיקי עניין וקבלת החלטות אסטרטגיות." 
            />
          </div>

          <h3 className="text-deep-navy text-[22px] font-bold mb-6">תחומים בהם אני מתמחה</h3>
          <div className="flex flex-wrap gap-2.5">
            <DomainTag>פיתוח ומוצר (R&D & Product)</DomainTag>
            <DomainTag>תפעול (Operations)</DomainTag>
            <DomainTag>תשתיות (Infrastructure)</DomainTag>
            <DomainTag>תמיכה ושירות (Support & Service)</DomainTag>
          </div>
        </div>
      </section>

      {/* Section 4: About Ofer - Short */}
      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">עם מי אתם עובדים</h2>
          <div className="space-y-5 text-[#555] body-text leading-relaxed max-w-3xl mb-10">
            <p>
              אני עפר שני. לאורך מעל 25 שנה הקמתי והובלתי חברת טכנולוגיה דרך מספר שלבי צמיחה, ניהלתי צוותים גלובליים בפיתוח, מוצר, תפעול ותמיכה, ועבדתי בתעשיות החל מטלקום וטכנולוגיה רפואית ועד גיימינג ומרטק.
            </p>
            <p className="small-text text-medium-gray">
              תואר שני (MA) במנהל עסקים ותואר ראשון (BSc) במדעי המחשב ומנהל עסקים, האוניברסיטה העברית בירושלים.
              <br/>
              שרות צבאי: מ"פ בתותחנים
            </p>
            <p>
              אני מביא את אותה גישה מעשית וישירה לקואצ'ינג שהבאתי לבניית חברות: להתמקד באנשים, לבנות את היסודות הנכונים, והתוצאות יגיעו.
            </p>
          </div>
          
          <Button variant="whatsapp" href="https://wa.me/972545422634" className="flex items-center gap-2">
            <span>בואו נדבר על הצוות שלכם</span>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </Button>
        </div>
      </section>
    </div>
  );
}
