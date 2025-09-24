// use***Store
// 커스텀 훅 -> use***
import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};

// immer(콜백함수) => 불변성을 쉽게 지켜주는 라이브러리
// (가장 안쪽) combine -> immer -> persist -> devtools -> subscribeWithSelector (가장 바깥)
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (set) => ({
            increment: () =>
              set((state) => {
                state.count = state.count + 1;
              }),
            decrement: () =>
              set((state) => {
                state.count = state.count - 1;
              }),
            reset: () => set({ count: 0 }),
            incrementByAmount: (value) =>
              set((state) => {
                state.count = state.count + value;
              }),
          }))
        ),
        {
          // 로컬스토리지 -> 브라우저 종료 해도 삭제 안됨, 탭과 탭 사이 공유 됨
          // 세션스토리지 -> 브라우저 종료 하면 삭제, 탭과 탭 사이 공유 안됨
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      {
        trace: true,
      }
    )
  )
);
