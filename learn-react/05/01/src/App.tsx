// 요소를 반복 렌더링 하려면
// 그 요소를 가공해서 가공된 값이 포함된 배열로 만들어주면 되겠다!
// 그리고 그 배열을 표현식으로 출력하면 되곘다!

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  /* const newItem = [];
  for (const key of items) {
    newItem.push(<li>{key}</li>);
  } */
  const handleItemAdd = () => {
    setItems((items) => ["New Item", ...items]);
  };
  return (
    <>
      {/* 배열을 가공할 일이 없거나, 배열의 뒷쪽으로만 새로운 요소가 추가될 경우 -> index key 값 사용 가능 */}
      {/* 배열을 가공해야 할 일이 있는데, 그 배열의 앞에 새로운 요소를 추가하거나, 배열 요소와 요소 사이에 새로운 요소를 추가할 경우 -> index key 값 사용 불가*/}
      <ul>
        {items.map((v) => (
          <input key={v} placeholder={v} style={{ display: "block" }} />
        ))}
      </ul>
      {/* <ul>{newItem}</ul> */}
      <button onClick={handleItemAdd}>추가</button>
    </>
  );
}
