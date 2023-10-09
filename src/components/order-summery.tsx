import heroBg from '../assets/illustration-hero.svg';
import music from '../assets/icon-music.svg';
const OrderSummery = () => {
	return (
		<section
			className="
        max-w-[280px]
        w-full
        bg-Very-pale-blue
        rounded-xl
        overflow-hidden
        grid
        place-items-center
        shadow-xl
      ">
			{/* img */}
			<img
				src={heroBg}
				alt="hero bg"
			/>
			{/* card content */}

			<div className="p-6">
				<div className=" text-center">
					<h1 className="text-lg font-extrabold text-Dark-blue">
						Order Summery
					</h1>

					<p className="text-sm text-Desaturated-blue font-medium">
						You can now listen to millions of songs, audiobooks, and podcasts on
						any device anywhere you like!
					</p>
				</div>

				{/* subscription plane */}
				<div className="flex items-center justify-between my-3 bg-Desaturated-blue/5 rounded-lg p-3">
					<img
						src={music}
						alt=""
					/>

					<div className="">
						<p className="text-[12px] font-bold text-Dark-blue">Annual Plan</p>
						<p className="text-[14px] text-Desaturated-blue">$59.99/year</p>
					</div>

					<p className="text-Bright-blue font-semibold underline hover:no-underline cursor-pointer text-sm">
						change
					</p>
				</div>
				{/* payment button */}

				<button className="bg-Bright-blue text-Pale-blue text-sm  py-3 w-full hover:opacity-80 font-bold rounded-lg shadow-md">
					Proceed to Payment
				</button>

				<button className="text-Desaturated-blue text-sm  w-full pt-6 font-bold hover:text-Dark-blue">
					Cancel Order
				</button>
			</div>
		</section>
	);
};

export default OrderSummery;
