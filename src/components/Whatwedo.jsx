import React from "react";

const steps = [
  {
    number: "1",
    title: "Project Discovery Call",
    desc: "Party we years to order allow asked of. We so opinion friends me message as delight.",
    dot: { left: "19%", top: "72%" },
    text: { left: "19%", top: "80%" },
  },
  {
    number: "2",
    title: "Project Discovery Call",
    desc: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
    dot: { left: "51%", top: "52%" },
    text: { left: "49%", top: "60%" },
  },
  {
    number: "3",
    title: "Project Discovery Call",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
    dot: { left: "74%", top: "17%" },
    text: { left: "72%", top: "25%" },
  },
];

const Whatwedo = () => {
  return (
    <div className="relative w-full mt-20" style={{ height: "750px" }}>
      {/* LEFT TEXT — absolutely positioned top-left */}
      <div className="absolute top-10 left-10 flex flex-col gap-4 w-80 z-30">
        <h2 className="text-[#5D5FEF] uppercase text-xs font-bold tracking-widest">
          Stockie Operation Across the world
        </h2>
        <p className="text-4xl font-black leading-tight text-gray-900">
          We have best team and best process
        </p>
        <p className="text-sm text-[#64607D] leading-relaxed">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
        <button className="bg-[#5D5FEF] text-white h-11 w-36 rounded-full font-semibold mt-2">
          Get Started
        </button>
      </div>

      {/* ZIGZAG IMAGE — covers the right portion, starts mid-left */}
      <img
        src="/vector-335.png"
        alt="zigzag"
        className="absolute z-0"
        style={{
          left: "5%",
          top: "10%",
          width: "90%",
          height: "90%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {/* STEPS — dots, numbers, text */}
      {steps.map((step, i) => (
        <div key={i}>
          {/* Big faded number */}
          <span
            className="absolute select-none z-0 font-black text-gray-200 leading-none"
            style={{
              fontSize: "120px",
              left: step.dot.left,
              top: `calc(${step.dot.top} - 100px)`,
              opacity: 0.5,
            }}
          >
            {i + 1}
          </span>

          {/* Dot */}
          <div
            className="absolute w-5 h-5 rounded-full z-10"
            style={{
              backgroundColor: "#B0AFBF",
              left: step.dot.left,
              top: step.dot.top,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Text card */}
          <div
            className="absolute z-20 w-56"
            style={{ left: step.text.left, top: step.text.top }}
          >
            <p className="font-bold text-sm text-gray-900">{step.title}</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Whatwedo;
