import FortyFourAnimation from "@images/404.json";
import Lottie from "lottie-react";

export default function LottieAnimation() {
	return (
		<Lottie
			animationData={FortyFourAnimation}
			className="w-[60vw] h-[60vh] mx-auto"
		/>
	);
}
