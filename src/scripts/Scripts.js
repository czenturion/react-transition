import gsap from 'gsap-trial';

export const animateAppearPage = () => {
  gsap
    .from('.page', {opacity: 0, duration: 1, delay: .25 });
}
