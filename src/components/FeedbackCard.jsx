import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 group-hover:bg-black/60">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-outfit font-normal text-[18px] leading-[32.4px] text-black my-10 transition-colors duration-300 group-hover:text-white">
      {content}
    </p>

    <div className="flex flex-row">
      {/* Uncomment below to display an image if needed */}
      {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
      <div className="flex flex-col ml-4">
        <h4 className="font-outfit font-semibold text-[20px] leading-[32px] text-black transition-colors duration-300 group-hover:text-white">
          {name}
        </h4>
        <p className="font-outfit font-normal text-[16px] leading-[24px] text-black transition-colors duration-300 group-hover:text-white">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
