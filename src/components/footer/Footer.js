import { v4 as uuid } from "uuid";
import { FooterList } from "../list/List";

const array = [
  {
    id: 11,
    title: "about",
    list: [
      "about us",
      "design",
      "sustainability",
      "we plant tress",
      "our story",
      "awards",
    ],
  },
  {
    id: 22,
    title: "help",
    list: [
      "holiday offers faq",
      "faq",
      "warranty",
      "shipments",
      "return & claims",
      "contact us",
    ],
  },
  {
    id: 33,
    title: "more",
    list: [
      "where to find us",
      "woodendot Family",
      "press",
      "affiliates",
      "video Lifestyle",
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div>
        {array.map((el) => {
          return (
            <div key={uuid()}>
              <h2 key={uuid()}>{el.title}</h2>
              <FooterList key={uuid()} array={el.list} />
            </div>
          );
        })}
      </div>
      <div></div>
    </footer>
  );
}
