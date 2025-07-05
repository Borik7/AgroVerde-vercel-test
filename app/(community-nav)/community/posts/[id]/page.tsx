"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const fakePosts = [
  {
    id: "1",
    title: "Ինչպես ճիշտ պլանավորել ռոտացիան",
    author: "Լևոն Կիրակոսյան",
    date: "5 Հուլիս, 2025",
    description:
      "Ռոտացիան օգնում է պահպանել հողի բերրիությունը։ Սովորիր քայլ առ քայլ մշակել պլան։",
    image: "/pages/community/posts/post1.jpg",
    content: `
Ռոտացիան՝ կամ մշակաբույսերի հերթափոխությունը, հողի պահպանման և բերքի կայուն աճի կարևոր գործիքներից է։ Եթե միևնույն հողատարածքում տարիներ շարունակ տնկվում է նույն բույսը, հողը արագ սպառվում է, և տարածվում են հիվանդություններ։

### Ինչպես սկսել ռոտացիան

- 💡 **Քայլ 1**․ Հասկացիր, թե որ խմբի է պատկանում բույսդ։ Օրինակ՝ լոլիկը պատկանում է սոլանացեների ընտանիքին։
- 💡 **Քայլ 2**․ Մի տնկիր հաջորդ տարի նույն խմբի բույս։
- 💡 **Քայլ 3**․ Օգտագործիր լոբազգիներ՝ հողը ազոտով հարստացնելու համար։
- 💡 **Քայլ 4**․ Պլանավորի՛ր գոնե 3 տարվա պտույտ։

### Օրինակ պլան

1. Տարի 1 - լոլիկ
2. Տարի 2 - գազար (արմատապտուղ)
3. Տարի 3 - լոբի (լոբազգի)

Այս հերթափոխը կօգնի նվազեցնել հողի սթրեսը և բարձրացնել բերքատվությունը։

🔄 *Ավելի խելացի գյուղատնտեսություն՝ այսօրից։*
    `,
  },
  {
    id: "2",
    title: "Բանջարեղենների խնամքի գաղտնիքները",
    author: "Անի Սահակյան",
    date: "3 Հուլիս, 2025",
    description: "Ինչպես ճիշտ ջրել, պարարտացնել և խնամել բանջարեղենները։",
    image: "/pages/community/posts/post2.jpg",
  },
  {
    id: "3",
    title: "Երկարատեւ բերք ստանալու հնարքները",
    author: "Հովհաննես Պետրոսյան",
    date: "1 Հուլիս, 2025",
    description:
      "Ձեզ կներկայացնենք տեխնիկաներ, որոնք կօգնեն ստանալ կայուն բերք։",
    image: "/pages/community/posts/post3.jpg",
  },
];

export default function PostDetailPage() {
  const { id } = useParams();
  const post = fakePosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 text-center text-red-500">
        Պոստը չի գտնվել։
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <div className="relative h-64 w-full rounded-xl overflow-hidden border">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-sm text-gray-500">
        ✍️ {post.author} • 📅 {post.date}
      </div>

      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
}
