const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 pt-8 px-10 sm:px-24 rounded-3xl"
        style={{ marginBottom: "-2.5rem", backgroundColor: "#f5e2e4" }}
      >
        <div>
          <h2 className="text-lg font-bold text-blue tracking-widest mb-2 text-center sm:text-start">
            ENGAGE VISITORS
          </h2>
          <h3 className="text-4xl sm:text-6xl font-bold text-black leading-snug mb-2 text-center sm:text-start">
            <span className="text-blue"> AI chat </span> Pro-Actively engage
            visitors
          </h3>
          <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
            Our Proactive Chat engages visitors differently depending on their
            behaviour in your store.
          </h5>
        </div>

        <div className="flex justify-center items-end">
          <img src="/images/belief-img-1.png" className="h-[350px] lg:h-[400px] w-full object-cover" />
        </div>
      </div> 
      
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">
        <div className="bg-darkblue pt-12 px-10 sm:px-24 rounded-3xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-widest mb-5 text-center sm:text-start">
              BE THEIR FRIEND
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
              Be their Friend{" "}
              <span className="text-grey">, not a textbook.</span>
            </h3>
            <h5 className="text-offwhite pt-2 text-center sm:text-start text-xl">
              No matter where or how they speak, Smartle.ai adapts to your
              business, breaking the language barrier with its conversational AI.
            </h5>
          </div>
          <div className="flex justify-center items-end">
            <img src="/images/belief-img-2.webp" className="h-[450px] lg:h-[500px] w-full object-cover" />
          </div>
        </div>
        <div className="pt-12 px-10 sm:px-24 rounded-3xl flex flex-col justify-between" style={{backgroundColor:"#D6FFEB"}}>
          <div>
            <h2 className="text-lg font-bold text-blue tracking-widest mb-5 text-center sm:text-start">
            TRAIN
            </h2>
            <h3 className="text-4xl sm:text-6xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
              <span className="text-blue">Train</span> your AI assistance to suit
              your needs
            </h3>
            <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-xl">
              Every chat is an opportunity for Smartle.ai to learn something new
              and with each response, it gets better at understanding what you
              need. The longer you use Smartle.ai, the better it becomes at
              helping you make sales with its conversational AI for e-commerce.
            </h5>
          </div>
          <div className="flex justify-center items-end">
            <img src="/images/belief-img-3.png" className="h-[450px] lg:h-[500px] w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
