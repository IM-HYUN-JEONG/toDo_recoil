import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

// 유니크한 키를 주고, 디폴트값으로 빈배열을 설정
//atom의 값에 접근하려면(=불러옴) useRecoilValue함수를 이용하면 된다.
//atom의 값을 변경하려면 useSetRecoilState함수를 사용
//useRecoilState함수는 값을 변경하고 접근하는 함수를 반환함 useState와 동일한 기능
function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
