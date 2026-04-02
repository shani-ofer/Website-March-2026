import { useState } from 'react';
import { Badge, Card } from "@/src/components/UI";
import { Button } from "@/src/components/Button";
import { Modal } from "@/src/components/Modal";

export function IndividualsPage() {
  const [isBeginningCareerOpen, setIsBeginningCareerOpen] = useState(false);
  const [isMiddleCareerOpen, setIsMiddleCareerOpen] = useState(false);
  const [isNewManagersOpen, setIsNewManagersOpen] = useState(false);
  const [isFreelancersOpen, setIsFreelancersOpen] = useState(false);

  const beginningCareerContent = [
    {
      title: "המטרה:",
      text: "לדייק את השאיפות שלך ולסייע לך לקבל החלטות מושכלות לגבי הצעדים הראשונים והנכונים ביותר עבורך."
    },
    {
      title: "מיועד:",
      text: "לאנשים הנמצאים בראשית דרכם המקצועית, מתלבטים לאחר לימודים, צבא, או כל מי שניצב בפני בחירת מסלול ורוצה לבנות יסודות חזקים."
    },
    {
      title: "מבנה:",
      text: "התהליך מורכב מ-10 פגישות שבועיות אישיות, המאפשרות עבודה ממוקדת, מעמיקה וליווי צמוד שלב אחר שלב."
    },
    {
      title: "התוצאה:",
      text: "קבלת החלטה ברורה ומגובשת על הכיוון המקצועי שלך, יחד עם תוכנית פעולה מעשית וביטחון בדרך שבחרת."
    }
  ];

  const middleCareerContent = [
    {
      title: "מטרה:",
      text: "לזקק את הערך הייחודי שלך, למנף את הניסיון שכבר צברת, ולהבין בצורה בהירה ומדויקת מהו הצעד הבא הנכון לקריירה שלך."
    },
    {
      title: "מיועד:",
      text: "לאנשי מקצוע מנוסים הנמצאים בצומת דרכים, שואפים לשדרוג תעסוקתי, או מחפשים לדייק את המסלול המקצועי הבא שלהם."
    },
    {
      title: "מבנה:",
      text: "התהליך מורכב מ-10 פגישות שבועיות אישיות, המאפשרות חשיבה מחודשת, מיקוד ובניית תוכנית פעולה פרקטית."
    },
    {
      title: "תוצאה:",
      text: "קבלת החלטה מבוססת על הכיוון המדויק לפרק הבא, יחד עם מפת דרכים ברורה שמחברת בין הניסיון שלך ליעדים החדשים."
    }
  ];

  const newManagersContent = [
    {
      title: "מטרה:",
      text: "הבנת המרכיבים הנדרשים לשינוי מביצוע לניהול, ודיוק הצעד הבא שיאפשר הובלה אפקטיבית של אנשים ותהליכים במרחב הארגוני."
    },
    {
      title: "מיועד:",
      text: "למנהלים ומנהלות בתחילת דרכם, שעברו מתפקיד של איש צוות לניהול צוות."
    },
    {
      title: "מבנה:",
      text: "התהליך מבוסס על 10 פגישות שבועיות אישיות, המהוות מרחב בטוח לניתוח ופיצוח אתגרים ניהוליים בתחילת הדרך."
    },
    {
      title: "תוצאה:",
      text: "בניית תוכנית עבודה פרקטית ליישום הצעדים הראשונים בתפקיד בביטחון, במקצועיות ומתוך סמכות."
    }
  ];

  const freelancersContent = [
    {
      title: "מטרה:",
      text: "זיהוי החסמים המעכבים את צמיחת העסק, ודיוק הצעד הבא שיאפשר קבלת החלטות עסקיות מושכלות ופריצת דרך מקצועית."
    },
    {
      title: "מיועד:",
      text: "לעצמאיים ובעלי עסקים הנמצאים בנקודת עצירה, בשלבי התרחבות, או בצומת דרכים הדורשת הגדרה מחדש של מסלול הצמיחה."
    },
    {
      title: "מבנה:",
      text: "התהליך מבוסס על 10 פגישות שבועיות אישיות, המהוות מרחב אסטרטגי לניתוח ופיצוח האתגרים הייחודיים לניהול עסק עצמאי."
    },
    {
      title: "תוצאה:",
      text: "קבלת החלטה ברורה על כיוון העסק ובניית תוכנית עבודה פרקטית לצעדים הבאים, המעניקה ביטחון בניהול העצמאי ובדרך שנבחרה."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="pt-[120px] pb-[80px] px-6 text-center max-w-[1000px] mx-auto w-full">
        <Badge>שיחת היכרות ללא עלות</Badge>
        <h1 className="text-deep-navy mb-4">הדרך קדימה מתחילה בשיחה</h1>
        <p className="text-[18px] md:text-[22px] font-medium text-[#555] max-w-3xl mx-auto mb-10 leading-relaxed">
          קואצ'ינג קריירה עם עפר שני. הכוונה אישית ומעשית לכל שלב בקריירה שלך.
        </p>
        <Button variant="whatsapp" href="https://wa.me/972545422634" className="flex items-center gap-2 mx-auto">
          <span>קבע/י שיחת היכרות ללא עלות</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </Button>
      </section>

      {/* Section 2: Sound Familiar? */}
      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-10">נשמע מוכר?</h2>
          <div className="space-y-6 max-w-3xl">
            {[
              "אני לא בטוח/ה מה אני רוצה לעשות הלאה.",
              "קודמתי לתפקיד ניהולי ואני מרגיש/ה שאני מנסה להבין אותו תוך כדי תנועה.",
              "העסק שלי לא צומח ואני לא יודע/ת מה לשנות.",
              "אני יודע/ת שאני צריך/ה שינוי, אבל לא יודע/ת מאיפה להתחיל.",
              "אני באותו מקום יותר מדי זמן ומרגיש/ה תקוע/ה."
            ].map((quote, i) => (
              <div key={i} className="border-r-4 border-sky-blue pr-6 py-2">
                <p className="text-[18px] italic text-[#555]">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Who This Is For */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-10">אני עובד עם אנשים בכל שלב בקריירה</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              onClick={() => setIsBeginningCareerOpen(true)}
              className="group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                <h3 className="text-[18px] font-bold text-deep-navy mb-3 underline decoration-2 underline-offset-2 group-hover:text-soft-teal transition-colors">
                  בתחילת הדרך
                </h3>
                <p className="text-[15px] font-normal text-[#555] leading-[1.65]">
                  את/ה בונה את היסודות. הבחירות שאת/ה עושה עכשיו מעצבות את כל מה שיבוא אחר כך. בואו נחשוב עליהן ביחד. <span className="text-soft-teal font-medium">לפרטי התהליך</span>
                </p>
              </div>
            </div>
            <div
              onClick={() => setIsMiddleCareerOpen(true)}
              className="group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                <h3 className="text-[18px] font-bold text-deep-navy mb-3 underline decoration-2 underline-offset-2 group-hover:text-soft-teal transition-colors">
                  באמצע הקרירה
                </h3>
                <p className="text-[15px] font-normal text-[#555] leading-[1.65]">
                  יש לך ניסיון וכישורים. השאלה עכשיו היא איך להשתמש בהם בדרך שמרגישה נכונה לפרק הבא. <span className="text-soft-teal font-medium">לפרטי התהליך</span>
                </p>
              </div>
            </div>
            <div
              onClick={() => setIsNewManagersOpen(true)}
              className="group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                <h3 className="text-[18px] font-bold text-deep-navy mb-3 underline decoration-2 underline-offset-2 group-hover:text-soft-teal transition-colors">
                  מנהלים חדשים
                </h3>
                <p className="text-[15px] font-normal text-[#555] leading-[1.65]">
                  היית מצוין/ת בעבודה שלך, ועכשיו את/ה מנהל/ת אחרים שעושים אותה. המעבר הזה הוא אחד הקשים בכל קריירה, והוא לא מגיע עם מדריך למשתמש. <span className="text-soft-teal font-medium">לפרטי התהליך</span>
                </p>
              </div>
            </div>
            <div
              onClick={() => setIsFreelancersOpen(true)}
              className="group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
                <h3 className="text-[18px] font-bold text-deep-navy mb-3 underline decoration-2 underline-offset-2 group-hover:text-soft-teal transition-colors">
                  עצמאיים ובעלי עסקים
                </h3>
                <p className="text-[15px] font-normal text-[#555] leading-[1.65]">
                  לנהל משהו משלך אומר לקבל כל החלטה לבד. כשהעסק נעצר או שאת/ה מאבד/ת כיוון, שיחה עם מישהו לחשוב איתו משנה הכל. <span className="text-soft-teal font-medium">לפרטי התהליך</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: About Ofer - Short */}
      <section className="py-12 md:py-20 px-6 bg-warm-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-deep-navy mb-8">קצת עליי</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="space-y-5 text-[#555] body-text leading-relaxed max-w-3xl mb-10">
                <p>
                  אני עפר שני. ביליתי מעל 25 שנה בהובלת טכנולוגיה, כולל הקמה והובלה של חברת טכנולוגיה דרך מספר שלבי צמיחה. עבדתי בתחומי טלקום, טכנולוגיה רפואית, גיימינג, חממות טכנולוגיות ומרטק, וניהלתי צוותים בפיתוח, מוצר, תפעול ותמיכה.
                </p>
                <p>
                  היום אני מאמן אנשים דרך אתגרי קריירה. הגישה שלי פשוטה: שאלות אמיתיות, שיחה כנה והכוונה מעשית הבנויה על ניסיון, לא על ספרי לימוד.
                </p>
                <p className="font-medium text-deep-navy text-[18px] mt-6">
                  השיחה הראשונה היא ללא עלות וללא התחייבות. בואו נבדוק אם יש התאמה.
                </p>
              </div>
              
              <Button variant="whatsapp" href="https://wa.me/972545422634" className="flex items-center gap-2">
                <span>קבע/י שיחת היכרות ללא עלות</span>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </Button>
            </div>
            <div className="w-[70%] md:w-[23%] mx-auto md:mx-0 shrink-0">
              <img 
                src="/profile2.png" 
                alt="עפר שני" 
                className="w-full h-auto rounded-2xl shadow-md object-cover aspect-square md:aspect-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isBeginningCareerOpen}
        onClose={() => setIsBeginningCareerOpen(false)}
        title="בתחילת הדרך"
        content={beginningCareerContent}
      />

      <Modal
        isOpen={isMiddleCareerOpen}
        onClose={() => setIsMiddleCareerOpen(false)}
        title="באמצע הקרירה"
        content={middleCareerContent}
      />

      <Modal
        isOpen={isNewManagersOpen}
        onClose={() => setIsNewManagersOpen(false)}
        title="מנהלים חדשים"
        content={newManagersContent}
      />

      <Modal
        isOpen={isFreelancersOpen}
        onClose={() => setIsFreelancersOpen(false)}
        title="עצמאיים ובעלי עסקים"
        content={freelancersContent}
      />
    </div>
  );
}
