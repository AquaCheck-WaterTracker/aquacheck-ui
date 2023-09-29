import gym from '../assets/gym.svg'
import fruit from '../assets/fruit.svg'
import soda from '../assets/soda.svg';






function Goal() {
    return (

        <>
 
 <div className="goal flex flex-col text-cyan-800 mx-10 py-8">
 <h1 className="text-2xl py-4">How Much Water Do I Need?</h1>
 <p>Water is an essential nutrient at every age, so optimal hydration is a key component for good health. Water accounts for about 60% of an adult’s body weight. We drink fluids when we feel thirst, the major signal alerting us when our body runs low on water. We also customarily drink beverages with meals to help with digestion. But sometimes we drink not based on these factors but on how much we think we should be drinking. One of the most familiar sayings is to aim for “8 glasses a day,” but this may not be appropriate for every person.</p>
 <h3 className="text-xl py-2 mb-2 mt-5">General recommendations:</h3>
 <ul className="">
    <li>The National Academy of Medicine suggests an adequate intake of daily fluids of about 13 cups and 9 cups for healthy men and women, respectively, with 1 cup equaling 8 ounces. Higher amounts may be needed for those who are physically active or exposed to very warm climates. Lower amounts may be needed for those with smaller body sizes. It’s important to note that this amount is not a daily target, but a general guide. In the average person, drinking less will not necessarily compromise one’s health as each person’s exact fluid needs vary, even day-to-day.</li>
    <li>Fever, exercise, exposure to extreme temperature climates, and excessive loss of body fluids, will increase fluid needs.</li>
    <li>Alcohol can suppress anti-diuretic hormone, a fluid-regulating hormone that signals the kidneys to reduce urination and reabsorb water back into the body. Without it, the body flushes out water more easily. Enjoying more than a couple of drinks within a short time can increase the risk of dehydration, especially if taken on an empty stomach. To prevent this, take alcohol with food and sips of water.</li>
    <li>Although caffeine has long been thought to have a diuretic effect, potentially leading to dehydration, research does not fully support this. The data suggest that more than 180 mg of caffeine daily (about two cups of brewed coffee) may increase urination in the short-term in some people, but will not necessarily lead to dehydration. Therefore, caffeinated beverages including coffee and tea can contribute to total daily water intake. </li>
 </ul>
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
                <img
                src={gym}
                alt="image"
                className="w-full"
                 />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
            </span>
            <h3>
            <a className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl" href="https://familydoctor.org/hydration-why-its-so-important/" target="_blank" rel="noopener noreferrer">Exercising helps you stay healthy and strong</a>
            <p className="text-body-color text-base">

            Path to improved health
            </p>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src={fruit}
              alt="fruit"
              className="w-full"
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Mar 15, 2023
            </span>
            <h3>
            <a className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl" href="https://www.medicalnewstoday.com/articles/291683" target="_blank" rel="noopener noreferrer">Does an apple a day really keep the doctor away?</a>
            </h3>
            <p className="text-body-color text-base">
            Eating fruits and vegetables that are rich in water and minerals is a good way to stay hydrated.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src={soda}
              alt="image"
              className="w-full"
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Jan 05, 2023
            </span>
            <h3>
            <a className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl" href="https://www.medicalnewstoday.com/articles/both-diet-and-regular-soda-may-increase-insulin-levels" target="_blank" rel="noopener noreferrer">Soft drinks increased salivary insulin levels</a>
            </h3>
            <p className="text-body-color text-base">
                This study was a single-blind study that included fifteen participants. Participants were healthy adults between 18 and 45 years, with no history of diabetes or abnormal blood sugar levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        </>
    )
}

export default Goal;