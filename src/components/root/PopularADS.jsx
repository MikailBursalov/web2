import { PopularADSContent } from "./PopularADSContent";
import { Realtors } from "./Realtors";

export const PopularADS = () => {
  return (
    <section className={`my-10`}>
      <div
        className={`max-w-screen-2xl mx-auto gap-5 flex justify-between items-start`}
      >
        <div className={`w-4/5`}>
          <PopularADSContent />
        </div>
        <div className={`w-1/5`}>
          <Realtors />
        </div>
      </div>
    </section>
  );
};
